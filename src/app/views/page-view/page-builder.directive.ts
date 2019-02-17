import { footerComponent } from './../../uicomponents/footer/footer.component';
import { headerComponent } from './../../uicomponents/header/header.component';
import { cssloaderComponent } from './../../uicomponents/cssloader/cssloader.component';

// tslint:disable-next-line:max-line-length
import { Directive, Input, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject, Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { viewsdataservice } from 'src/app/services/viewsdata.service';
import { contentoutletComponent } from 'src/app/uicomponents/contentoutlet/contentoutlet.component';

@Directive({
  selector: '[pagebuilderdirective]'
})
export class pagebuilderDirective implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  @Input() pagebuilderdirective: Observable<any>;
  private onDestroy$ = new Subject<boolean>();
  components;
  route0$;

  private elRef: any;

  readonly templateMapper = {
    css: cssloaderComponent,
    contentoutlet: contentoutletComponent,
    header: headerComponent,
    footer: footerComponent
  };

  constructor(
    public viewContainerRef: ViewContainerRef,
    private factory: ComponentFactoryResolver,
    private router: Router,
    private vds: viewsdataservice
  ) {
    this.elRef = viewContainerRef;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.pagebuilderdirective.subscribe(data => {
          if (data) {
            this.loadComponent(data);
          }
        });
      }
    });
  }

  ngOnInit(): void {
   
   
  }

  ngOnChanges() {
  }

  ngOnDestroy() {
    this.elRef.clear();
  }

  ngAfterViewInit() {
  
    this.pagebuilderdirective.subscribe(data => {
      if (data) {
        this.loadComponent(data)
      }
    });
  }

  checker() {
    return this.pagebuilderdirective;
  }

  loadComponent(data: any) {
    this.elRef.clear();
   
    const route0 = this.vds.route_arr;
    const components: Array<any> = data[0].components;
   
    const componentmanifest=this.vds.flatten(data[0].componentsmanifest);
    const orgdata = data[0];
    if (components) {
      const filtered = from(components).pipe(
        filter(component => {
          if (
            component.published === true && componentmanifest.pagespublished === route0 || component.da === "pb") {
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
