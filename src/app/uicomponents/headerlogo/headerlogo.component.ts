import { Component, OnInit, Input } from '@angular/core';
import { viewsdataservice } from './../../services/viewsdata.service';

@Component({
  selector: 'headerlogo',
  templateUrl: './headerlogo.component.html',
  styleUrls: ['./headerlogo.component.css']
})
export class headerlogoComponent implements OnInit {
@Input() data: any;
name = 'headerlogo';
hlc: string;
hld: string;
hlfs: string;
hlfw: string;
hlh: string;
hli: string;
hllt: string;
hltl: string;
hlmh: string;
hlw: string;
hlva: string;
hlpl: string;
hlpr: string;

constructor(private vds: viewsdataservice) { }

  ngOnInit() {
  this.loadInfo();

  }
  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    this.hlc = comp_els[this.name].styles.hlc;
    this.hld = comp_els[this.name].styles.hld,
    this.hlfs = comp_els[this.name].styles.hlfs;
    this.hlfw = comp_els[this.name].styles.hlfw;
    this.hlh = comp_els[this.name].styles.hlh;
    this.hli = comp_els[this.name].styles.hli;
    this.hllt = comp_data.headerlogo.hllt;
    this.hllt = comp_data.headerlogo.hltl;
    this.hlmh = comp_els[this.name].styles.hlmh;
    this.hlw = comp_els[this.name].styles.hlw;
    this.hlva = comp_els[this.name].styles.hlva; 
    this.hlpl = comp_els[this.name].styles.hlpl;
    this.hlpr = comp_els[this.name].styles.hlpr;
  }
}


/**
 * padding left =hlpl
 * padding right = hlpr
 * color = hlc
 * display = hld
 * font size = hlfs
 * font weight = hlfw
 * height = hlh
 * image = hli
 * logo text = hllt
 * logo tag line = hltl
 * max height = hlmh
 * width = hlw
 * vertical align = hlva
 */