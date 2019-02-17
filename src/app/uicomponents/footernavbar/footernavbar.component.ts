import { viewsdataservice } from './../../services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footernavbar',
  templateUrl: './footernavbar.component.html',
  styleUrls: ['./footernavbar.component.css']
})
export class footernavbarComponent implements OnInit {

@Input() data: any;
name="footernavbar"
constructor(private vds: viewsdataservice) { }

fnl: string;
fnd: string;
fnbdta: string;
fnbdac: string;
fnbdmt: string;
fnbaff: string;
fnbafs: string;
fnbafw: string;
fnbalh: string;
fnbac: string;
fnbpl: string;
fnbpr: string;
fnbcp: string;
fnbtdu: string;
fnbtdn: string;
fnbadfw: string;
fnbadc: string;
fnbdmb: string;

ngOnInit() {
this.loadInfo();

}
loadInfo() {
  const comp_els = this.vds.flatten(this.data.components);
  const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
  this.fnl = comp_data.nav.navlinks;
  this.fnd = comp_data.nav.donate;
  this.fnbdta = comp_els[this.name].styles.fnbdta;
  this.fnbdac = comp_els[this.name].styles.fnbdac;
  this.fnbdmt = comp_els[this.name].styles.fnbdmt;
  this.fnbaff = comp_els[this.name].styles.fnbaff;
  this.fnbafs = comp_els[this.name].styles.fnbafs;
  this.fnbafw = comp_els[this.name].styles.fnbafw;
  this.fnbalh = comp_els[this.name].styles.fnbalh;
  this.fnbac = comp_els[this.name].styles.fnbac;
  this.fnbpl = comp_els[this.name].styles.fnbpl;
  this.fnbpr = comp_els[this.name].styles.fnbpr;
  this.fnbcp = comp_els[this.name].styles.fnbcp;
  this.fnbtdu = comp_els[this.name].styles.fnbtdu;
  this.fnbtdn = comp_els[this.name].styles.fnbtdn;
  this.fnbadfw = comp_els[this.name].styles.fnbadfw;
  this.fnbadc = comp_els[this.name].styles.fnbadc;
  this.fnbdmb = comp_els[this.name].styles.fnbdmb;

}

}
