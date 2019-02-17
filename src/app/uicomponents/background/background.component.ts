import { Component, OnInit, Input } from '@angular/core';
import { viewsdataservice } from 'src/app/services/viewsdata.service';

@Component({
  selector: 'contentbackground',
  templateUrl: './background.component.html'
})
export class backgroundComponent implements OnInit {
@Input() data: any;
name = 'contentbackground';
bdi = "http://localhost:4200/assets/images/fallback.jpg";
bd: any;
bh: any;
bi: string;
bo = 100;
bp: string;
bgp: string;
br: string;
bs: any;
ibi: boolean;
bc: string;
bpb: boolean;
btp: string;
bto: string;
bscp: string;
bsco: string;
bsw: string;
bw: string;

  constructor(private vds: viewsdataservice) { }
  
  ngOnInit() {
    this.loadInfo();
  }

  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.bd = comp_els[this.name].styles.bd;
    this.bh = comp_els[this.name].styles.bh;
    this.bi = comp_els[this.name].styles.bi;
    this.ibi = comp_data.contentbackground.ibi;
    this.bpb = comp_data.contentbackground.published;
    this.bp = comp_els[this.name].styles.bp;
    this.bgp = comp_els[this.name].styles.bgp;
    this.br = comp_els[this.name].styles.br;
    this.bs = comp_els[this.name].styles.bs;  
    this.bc = comp_els[this.name].styles.bc; 
    this.btp = comp_els[this.name].styles.btp; 
    this.bto = comp_els[this.name].styles.bto;
    this.bscp = comp_els[this.name].styles.bscp;
    this.bsw = comp_els[this.name].styles.bsw;
    this.bw = comp_els[this.name].styles.bw;

  }

}

