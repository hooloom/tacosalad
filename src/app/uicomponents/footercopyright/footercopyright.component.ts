import { viewsdataservice } from 'src/app/services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footercopyright',
  templateUrl: './footercopyright.component.html',
  styleUrls: ['./footercopyright.component.css']
})
export class footercopyrightComponent implements OnInit {

@Input() data: any;
constructor(private vds: viewsdataservice) { }
name="footercopyright"
crDate = Date.now();
fcpt: string;
fcpfs: string;
fcpfw: string;
fcpff: string;
fcpmw: string;
fcpb: string;
fcpp: string;
fcpmd: string;
fcpmp: string;
fcppm: string;
fcpta: string;
fcppo: string;
fcpmt: string;
fcplh: string;
fcl: string;
fcpt2: string;
fcpbc: string;
fclt: string;
fcpatd: string;
fcpaci: string;
fcpac: string;
fcph: string;

ngOnInit() {
this.loadInfo();

}
loadInfo() {
  const comp_els = this.vds.flatten(this.data.components);
  const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
  // console.log(comp_data)
  this.fcpt = comp_data.footercopyright.fcpt;
  this.fcl = comp_data.footercopyright.fcl;
  this.fclt = comp_data.footercopyright.fclt;
  this.fcpt2 = comp_data.footercopyright.fcpt2;
  this.fcpfs = comp_els[this.name].styles.fcpfs;
  this.fcpfw = comp_els[this.name].styles.fcpfw
  this.fcpff = comp_els[this.name].styles.fcpff;
  this.fcpmw = comp_els[this.name].styles.fcpmw;
  this.fcpb = comp_els[this.name].styles.fcpb;
  this.fcpp = comp_els[this.name].styles.fcpp;
  this.fcpmd = comp_els[this.name].styles.fcpmd;
  this.fcpmp = comp_els[this.name].styles.fcpmp;
  this.fcppm = comp_els[this.name].styles.fcppm;
  this.fcpta = comp_els[this.name].styles.fcpta;
  this.fcppo = comp_els[this.name].styles.fcppo;
  this.fcpmt = comp_els[this.name].styles.fcpmt;
  this.fcplh = comp_els[this.name].styles.fcplh;
  this.fcpbc = comp_els[this.name].styles.fcpbc;
  this.fcpatd = comp_els[this.name].styles.fcpatd;
  this.fcpaci = comp_els[this.name].styles.fcpaci;
  this.fcpac = comp_els[this.name].styles.fcpac;
}
}
