import { Subject, from } from 'rxjs';
import { filter} from 'rxjs/operators';
import { viewsdataservice } from '../../services/viewsdata.service';
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
  selector: '[columnrightdirective]'
})
export class columnrightDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() columnrightdirective: any;
  orgdata: any;
  components: any;
  route0$: any;

  private elRef: any;

  readonly templateMapper = {
    
   
   
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
   
    this.loadComponent(this.columnrightdirective);
  
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
     console.log(components)
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
            component.published === true && componentmanifest.pagespublished === route0 || component.da === "columnright" ) {
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
