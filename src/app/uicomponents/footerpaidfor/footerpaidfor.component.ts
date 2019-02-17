import { viewsdataservice } from 'src/app/services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footerpaidfor',
  templateUrl: './footerpaidfor.component.html',
  styleUrls: ['./footerpaidfor.component.css']
})
export class footerpaidforComponent implements OnInit {

  @Input() data: any;
  name="footerpaidfor"
  constructor(private vds: viewsdataservice) { }
  objDate = Date.now();
  fpt: string;
  fpfs: string;
  fpfw: string;
  fpff: string;
  fpmw: string;
  fpb: string;
  fpp: string;
  fpmd: string;
  fpmp: string;
  fppm: string;
  fpta: string;
  fppo: string;
  fpmt: string;
  fplh: string;
  fpbc: string;

  ngOnInit() {
  this.loadInfo();
  
  }
  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    // console.log(comp_data)
    this.fpt = comp_data.footerpaidfor.fpt;
    this.fpfs = comp_els[this.name].styles.fpfs;
    this.fpfw = comp_els[this.name].styles.fpfw
    this.fpff = comp_els[this.name].styles.fpff;
    this.fpmw = comp_els[this.name].styles.fpmw;
    this.fpb = comp_els[this.name].styles.fpb;
    this.fpp = comp_els[this.name].styles.fpp;
    this.fpmd = comp_els[this.name].styles.fpmd;
    this.fpmp = comp_els[this.name].styles.fpmp;
    this.fppm = comp_els[this.name].styles.fppm;
    this.fpta = comp_els[this.name].styles.fpta;
    this.fppo = comp_els[this.name].styles.fppo;
    this.fpmt = comp_els[this.name].styles.fpmt;
    this.fplh = comp_els[this.name].styles.fplh;
    this.fpbc = comp_els[this.name].styles.fpbc;
  }
}
