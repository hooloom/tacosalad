import { Component, OnInit, Input } from '@angular/core';
import { viewsdataservice } from 'src/app/services/viewsdata.service';

@Component({
  selector: 'headerbackground',
  templateUrl: './headerbackground.component.html'
})
export class headerbackgroundComponent implements OnInit {
@Input() data: any;
name = 'headerbackground';
hbdi = "http://localhost:4200/assets/images/fallback.jpg";
hbd: any;
hbh: any;
hbi: string;
hbo = 100;
hbp: string;
hbgp: string;
hbr: string;
hbs: any;
hbc: any;
ihbi: boolean;
hpb: boolean;

  constructor(private vds: viewsdataservice) { }
  
  ngOnInit() {
    this.loadInfo();
    
  }

  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.hbd = comp_els[this.name].styles.hbd;
    this.hbh = comp_els[this.name].styles.hbh;
    this.hbi = comp_els[this.name].styles.hbi;
    this.ihbi = comp_data.headerbackground.ihbi;
    this.hpb = comp_data.headerbackground.published;
    this.hbp = comp_els[this.name].styles.hbp;
    this.hbgp = comp_els[this.name].styles.hbgp;
    this.hbr = comp_els[this.name].styles.hbr;
    this.hbs = comp_els[this.name].styles.hbs;  
    this.hbc = comp_els[this.name].styles.hbc;  
  }

}
