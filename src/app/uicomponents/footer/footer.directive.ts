import { footerbackgroundComponent } from './../footerbackground/footerbackground.component';
import { footercopyrightComponent } from '../footercopyright/footercopyright.component';
import { footerlogoComponent } from '../footerlogo/footerlogo.component';
import { footernavbarComponent } from './../footernavbar/footernavbar.component';
import { footernewsletterComponent } from './../footernewsletter/footernewsletter.component';
import { footerpaidforComponent } from './../footerpaidfor/footerpaidfor.component';
import { footersocialComponent } from './../footersocial/footersocial.component';
import { Subject, from } from 'rxjs';
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
  selector: '[footerdirective]'
})
export class footerDirective implements OnInit, OnDestroy, AfterViewInit {
  @Input() footerdirective: any;
  orgdata: any;
  components: any;
  route0$: any;

  private elRef: any;

  readonly templateMapper = {
    
    footerbackground: footerbackgroundComponent,
    footercopyright: footercopyrightComponent,
    footerlogo: footerlogoComponent,
    footernavbar: footernavbarComponent,
    footernewsletter: footernewsletterComponent,
    footerpaidfor: footerpaidforComponent,
    footersocial: footersocialComponent
   
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
   
    this.loadComponent(this.footerdirective);
  
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
    //  console.log(components)
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
            component.published === true && componentmanifest.pagespublished === route0 || component.da === "footer" ) {
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
