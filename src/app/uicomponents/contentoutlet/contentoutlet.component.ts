import { viewsdataservice } from 'src/app/services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'contentoutlet',
  templateUrl: './contentoutlet.component.html',
  styleUrls: ['./contentoutlet.component.css']
})
export class contentoutletComponent implements OnInit {
  @Input() data: any;
  name="contentoutlet";
  mm="maintenancemode";
  cs="comingsoon";

constructor(private vds: viewsdataservice) { }
cspub: boolean;
mspub: boolean;
contpub: boolean;

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo(){
    const comp_els = this.vds.flatten(this.data.components);
    const cs_data = this.vds.flatten(comp_els[this.cs].componentdata);
    const mm_data = this.vds.flatten(comp_els[this.mm].componentdata);
    // console.log(mm_data)
    this.cspub = cs_data.comingsoon.published;
    this.mspub = mm_data.maintenancemode.published;
    this.contpub = comp_els[this.name].published;
  }

}
