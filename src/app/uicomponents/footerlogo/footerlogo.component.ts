import { viewsdataservice } from './../../services/viewsdata.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'footerlogo',
  templateUrl: './footerlogo.component.html',
  styleUrls: ['./footerlogo.component.css']
})
export class footerlogoComponent implements OnInit {
  @Input() data: any;
  name = 'footerlogo';
  flc: string;
  fld: string;
  flfs: string;
  flfw: string;
  flh: string;
  fli: string;
  fllt: string;
  fltl: string;
  flmh: string;
  flw: string;
  flva: string;
  flpl: string;
  flpr: string;
  flmt: string;
  
  constructor(private vds: viewsdataservice) { }
  
    ngOnInit() {
    this.loadInfo();
  
    }
    loadInfo() {
      const comp_els = this.vds.flatten(this.data.components);
      const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
      this.flc = comp_els[this.name].styles.flc;
      this.fld = comp_els[this.name].styles.fld,
      this.flfs = comp_els[this.name].styles.flfs;
      this.flfw = comp_els[this.name].styles.flfw;
      this.flh = comp_els[this.name].styles.flh;
      this.fli = comp_els[this.name].styles.fli;
      this.fltl = comp_data.footerlogo.fltl;
      this.fllt = comp_data.footerlogo.fllt;
      this.flmh = comp_els[this.name].styles.flmh;
      this.flw = comp_els[this.name].styles.flw;
      this.flva = comp_els[this.name].styles.flva; 
      this.flpl = comp_els[this.name].styles.flpl;
      this.flpr = comp_els[this.name].styles.flpr;
      this.flmt = comp_els[this.name].styles.flmt;
    }
  }
  
  
  /**
   * padding left =flpl
   * padding right = flpr
   * color = flc
   * display = fld
   * font size = flfs
   * font weight = flfw
   * height = flh
   * image = fli
   * logo text = fllt
   * logo tag line = fltl
   * max height = flmh
   * width = flw
   * vertical align = flva
   */
