import { Component, OnInit, Input } from '@angular/core';
import { viewsdataservice } from 'src/app/services/viewsdata.service';

@Component({
  selector: 'footerbackground',
  templateUrl: './footerbackground.component.html'
})
export class footerbackgroundComponent implements OnInit {
@Input() data: any;
name = 'footerbackground';
fbdi = "http://localhost:4200/assets/images/fallback.jpg";
fbd: any;
fbh: any;
fbi: string;
fbo = 100;
fbp: string;
fbgp: string;
fbr: string;
fbs: any;
ifbi: boolean;
fbc: string;
fpb: boolean;
fbtp: string;
fbto: string;
fbscp: string;
fbsco: string;
fbsw: string;
fbw: string;

  constructor(private vds: viewsdataservice) { }
  
  ngOnInit() {
    this.loadInfo();
  }

  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.fbd = comp_els[this.name].styles.fbd;
    this.fbh = comp_els[this.name].styles.fbh;
    this.fbi = comp_els[this.name].styles.fbi;
    this.ifbi = comp_data.footerbackground.ifbi;
    this.fpb = comp_data.footerbackground.published;
    this.fbp = comp_els[this.name].styles.fbp;
    this.fbgp = comp_els[this.name].styles.fbgp;
    this.fbr = comp_els[this.name].styles.fbr;
    this.fbs = comp_els[this.name].styles.fbs;  
    this.fbc = comp_els[this.name].styles.fbc; 
    this.fbtp = comp_els[this.name].styles.fbtp; 
    this.fbto = comp_els[this.name].styles.fbto;
    this.fbscp = comp_els[this.name].styles.fbscp;
    this.fbsw = comp_els[this.name].styles.fbsw;
    this.fbw = comp_els[this.name].styles.fbw;

  }

}

