import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { advertisementsComponent } from './advertisements/advertisements.component';
import { archivesComponent } from './archives/archives.component';
import { backgroundComponent} from './background/background.component';
import { cartComponent } from './cart/cart.component';
import { categoriesComponent } from './categories/categories.component';
import { clearfocusDirective } from './../utils/clearinput.directive';
import { columnleftComponent } from './columnleft/columnleft.component';
import { columnleftDirective } from './columnleft/columnleft.directive';
import { columnrightComponent } from './columnright/columnright.component';
import { columnrightDirective } from './columnright/columnright.directive';
import { columnmiddleComponent } from './columnmiddle/columnmiddle.component';
import { columnmiddleDirective } from './columnmiddle/columnmiddle.directive';
import { comingsoonComponent } from './comingsoon/comingsoon.component';
import { contentoutletComponent } from './contentoutlet/contentoutlet.component';
import { contentComponent } from './content/content.component';
import { contentDirective } from './contentoutlet/contentoutlet.directive';
import { cssloaderComponent } from './cssloader/cssloader.component';
import { footerComponent } from './footer/footer.component';
import { footeraddressComponent } from './footeraddress/footeraddress.component';
import { footerbackgroundComponent } from './footerbackground/footerbackground.component';
import { footercopyrightComponent } from './footercopyright/footercopyright.component';
import { footerDirective } from './footer/footer.directive';
import { footerlogoComponent } from './footerlogo/footerlogo.component';
import { footernavbarComponent } from './footernavbar/footernavbar.component';
import { footernewsletterComponent } from './footernewsletter/footernewsletter.component';
import { footerpaidforComponent } from './footerpaidfor/footerpaidfor.component';
import { footersocialComponent } from './footersocial/footersocial.component';
import { headerComponent } from './header/header.component';
import { headerbackgroundComponent } from './headerbackground/headerbackground.component';
import { headercontentoutletComponent } from './headercontentoutlet/headercontentoutlet.component';
import { headerDirective } from './header/header.directive';
import { headerlogoComponent } from './headerlogo/headerlogo.component';
import { headernavbarComponent } from './headernavbar/headernavbar.component';
import { headertextComponent } from './headertext/headertext.component';
import { imageloaderDirective } from './../utils/imageloader.directive'
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { maintenanceComponent } from './maintenance/maintenance.component';
import { menuPipe } from './../utils/menu.pipe';
import { minicartComponent } from './minicart/minicart.component';
import { orderbyPipe } from '../utils/orderby.pipe';
import { resourcesanitizerPipe } from '../utils/resourcesanitize.pipe';
import { sidemenuComponent } from './sidemenu/sidemenu.component';
import { stylesanitizerPipe } from './../utils/stylesanitizer.pipe';
import { sanitizerPipe } from './../utils/sanitizer.pipe';
import { searchComponent } from './search/search.component';
import { StickyThingDirective } from './../utils/stickyheader.directive';
import { TestComponent } from './test/test.component';
import { volunteerComponent } from './volunteer/volunteer.component';


@NgModule({
imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule, 
    MaterialModule,
    LazyLoadImageModule
        ],
exports: [
    cssloaderComponent,
    menuPipe,
    resourcesanitizerPipe,
    sanitizerPipe,
    stylesanitizerPipe,
    TestComponent
],
declarations: [
    advertisementsComponent,
    archivesComponent,
    backgroundComponent,
    cartComponent,
    categoriesComponent,
    clearfocusDirective,
    columnleftComponent,
    columnleftDirective,
    columnmiddleComponent,
    // columnmiddleDirective,
    columnrightComponent,
    // columnrightDirective,
    comingsoonComponent,
    contentComponent,
    contentoutletComponent,
    contentDirective,
    cssloaderComponent,
    footerComponent,
    footeraddressComponent,
    footerbackgroundComponent,
    footercopyrightComponent,
    footerDirective,
    footernewsletterComponent,
    footernavbarComponent,
    footerlogoComponent,
    footerpaidforComponent,
    footersocialComponent,
    headerbackgroundComponent,
    headerComponent,
    headerlogoComponent,
    headernavbarComponent,
    headertextComponent,
    headercontentoutletComponent,
    headerDirective,
    imageloaderDirective,
    maintenanceComponent,
    menuPipe,
    minicartComponent,
    orderbyPipe,
    resourcesanitizerPipe,
    sanitizerPipe,
    searchComponent,
    sidemenuComponent,
    StickyThingDirective,
    stylesanitizerPipe,
    TestComponent,   
    volunteerComponent,
    
],
entryComponents: [
    backgroundComponent,
    cssloaderComponent,
    contentoutletComponent,
    columnleftComponent,
    columnmiddleComponent,
    columnrightComponent,
    footerComponent, 
    footerbackgroundComponent,
    footercopyrightComponent,
    footerlogoComponent,
    footernavbarComponent,
    footernewsletterComponent,
    footerpaidforComponent,
    footersocialComponent,
    headerComponent,
    headerbackgroundComponent,
    headerlogoComponent,
    headernavbarComponent
]
})
export class uicomponentsModule{}