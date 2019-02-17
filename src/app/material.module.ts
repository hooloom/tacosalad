import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
        MatIconModule,
        MatToolbarModule
 } from '@angular/material';
@NgModule({
  declarations: [
  ],  
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule
  ],
})

export class MaterialModule { }