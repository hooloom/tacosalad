import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { viewsdataservice } from 'src/app/services/viewsdata.service';

@Component({
  selector: 'columnleft',
  templateUrl: './columnleft.component.html',
  styleUrls: ['./columnleft.component.css']
})
export class columnleftComponent implements OnInit {
  @Input() data: any;
  name = 'columnleft';
  constructor(private vds: viewsdataservice) { }

  lp: boolean;
  ngAfterContentInit(){
    this.loadInfo();
  }
  ngOnInit() {
  
  }
 
  loadInfo(){
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.lp = comp_data.columnleft.published;

  }
}
