import { columnleftComponent } from './../columnleft/columnleft.component';
import { columnmiddleComponent } from './../columnmiddle/columnmiddle.component';
import { columnrightComponent } from './../columnright/columnright.component';

import { from } from 'rxjs';
import { filter} from 'rxjs/operators';
import { viewsdataservice } from './../../services/viewsdata.service';
// tslint:disable-next-line:max-line-length
import { Directive, Input, 
  OnInit, 
  ViewContainerRef, 
  AfterViewInit, 
  OnDestroy, 
  ComponentFactoryResolver
} from '@angular/core';



@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[columnleftdirective]'
})
export class columnleftDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() columnleftdirective: any;
  orgdata: any;
  components: any;
  route0$: any;

  private elRef: any;

  readonly templateMapper = {
  columnleft: columnleftComponent,
  columnmiddle: columnmiddleComponent,   
  columnright: columnrightComponent
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver,
    private vds: viewsdataservice
  ) {
    this.elRef = viewContainerRef;
  }

  ngOnInit(): void { 
    
  }

  ngOnDestroy() {
    this.elRef.clear();
  }

  ngAfterViewInit() {
   
    this.loadComponent(this.columnleftdirective);
  
  }

  

  loadComponent(data: any) {
    this.elRef.clear();
   
    const route0 = this.vds.route_arr;
    let components: Array<any> = data.components;
    const componentmanifest=this.vds.flatten(data.componentsmanifest);
    const orgdata = data;
 
    // if (components && components.length > 0) {
    //   const orgdata = data;
    //   const filtered = from(components).pipe(
    if (components) {
      let sortedcomponents = components.sort(
        (a, b)=>{
          if(a.order < b.order) { return -1; }
          if(a.order > b.order) { return 1; }
          return 0;
      }
      );
      const filtered = from(sortedcomponents).pipe(
        filter(component => {
          if (
            component.da=="contentoutlet" ||  component.published === true && componentmanifest.pagespublished === route0 ) {
              return component;
          } 
        })
      
      );
     
      filtered.subscribe(
        (component) => { 
        const componentFactory = this.factory.resolveComponentFactory(this.getComponentByAlias(component.name));
        // this.elRef.clear();
        const componentRef = this.elRef.createComponent(componentFactory);
        (<any>componentRef.instance).data = orgdata;
      });
    }
    // this.elRef.clear();
  }
  private getComponentByAlias(alias: string) {
    return this.templateMapper[alias];
  }
}