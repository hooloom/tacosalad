import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { viewsdataservice } from './../../services/viewsdata.service';

@Component({
  selector: 'headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.css']
})
export class headernavbarComponent implements OnInit {
  
  @Input() data: any;
  name="headernavbar";
  hnlm: string;
  hnndl: string;
  hnnlcb: string;
  hnnlchb: string; 
  hnnlpfc: string;
  hnnlpfw: string;
  hnnlphc: string;
  hnnpl: string;
  hnp: string;
  hnpdbc: string;
  hnpdmh: string;
  hnpdw: string;
  hnpdb: string;
  hnpdh: string;
  hnrm: string;
  hff: string;
  nav: string;
  
  @HostBinding('style.order') public hnor: string;
  @HostBinding('style.z-index') public hnz: string;
  constructor(private vds: viewsdataservice) { }

  ngOnInit() {
    this.loadInfo();
   
  
    }
    loadInfo() {
      const comp_els = this.vds.flatten(this.data.components);
      const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
      this.hnlm = comp_els[this.name].styles.hnlm;
      this.hnndl = comp_data.nav.donate;
      this.hnnlcb = comp_els[this.name].styles.hnnlcb;
      this.hnnlchb = comp_els[this.name].styles.hnnlchb;
      this.hnnlpfc = comp_els[this.name].styles.hnnlpfc;
      this.hnnlpfw = comp_els[this.name].styles.hnnlpfw;
      this.hnnlphc = comp_els[this.name].styles.hnnlphc;
      this.hnnpl = comp_data.nav.navlinks;
      this.hnp = comp_els[this.name].styles.hnp;
      this.hnpdbc = comp_els[this.name].styles.hnpdbc;
      this.hnpdmh = comp_els[this.name].styles.hnpdmh;
      this.hnpdw = comp_els[this.name].styles.hnpdw;
      this.hnpdb = comp_els[this.name].styles.hnpdb;
      this.hnpdh = comp_els[this.name].styles.hnpdh;
      this.hnrm = comp_els[this.name].styles.hnrm;
      this.hnor = comp_els[this.name].styles.hnor;
      this.hnz = comp_els[this.name].styles.hnz;
      this.hff = comp_els[this.name].styles.hff;
}

}

      /**
  * lefmargin = hnlm
  * navdonationslinks = hnndl
  * component data ^
  * navlinkchildbackground = hnnlcb
  * navlinkchildhoverbackground = hnnlchb
  * navlinkparentfontcolor = hnnlpfc
  * navlinkparentfontweight = hnnlpfw
  * navlinkparenthovercolor = hnnlphc
  * navparentlinks = hnnpl
  * padding = hnp
  * parentdivbackgroundcolor = hnpdbc
  * parentdivminheight = hnpdmh
  * parentdivwidth = hnpdw
  * parentdonatebackground = hnpdb
  * parentdonatehover = hnpdh
  * rightmargin = hnrm
  * component order = hnor
  */