import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
export const firebaseconfig = environment.firebaseconfig;
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewsModule } from './views/views.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'version6'}),    
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
   
    AppRoutingModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
