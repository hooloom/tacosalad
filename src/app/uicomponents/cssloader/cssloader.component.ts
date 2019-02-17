import { viewsdataservice } from './../../services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cssloader',
  template: `
 <ng-container *ngFor="let element of csselements">
 
 <link *ngIf="element.published" rel="stylesheet" type="text/css" [href]="element.link | sanitize" integrity="{{element.integrity}}" >

 
 </ng-container>
`})




export class cssloaderComponent implements OnInit {
  @Input() data: any;
  name = 'css';

  csselements: string;
  constructor(private vds: viewsdataservice) { }

  ngOnInit() {
    this.loadInfo();
    
  }
  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.csselements = comp_data[this.name].csselements;
  }

}
