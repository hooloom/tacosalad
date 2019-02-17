import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { viewsdataservice } from './../../services/viewsdata.service';

@Component({
  selector: 'footersocial',
  templateUrl: './footersocial.component.html',
  styleUrls: ['./footersocial.component.css'],
  
})
export class footersocialComponent implements OnInit {
@Input() data: any;
name="footersocial";
fssl: string;
socialngfor: string;
fsbc: string;
fsli: string;
fsytb: string;
fsfb: string;
fsib: string;
fstb: string;
fsfs: string;
fsw: string;
fsh: string;
fsdib: string;
fsd: string;
fsjc: string;
fsai: string;
fsta: string;
fsls: string;
fsp: string;
fsm: string;
fsmbs: string;
fsmbe: string;
fsmis: string;
fsmie: string;
fspis: string;
fslid: string;
fslita: string;
fsulls : string;
fsifc: string;
fsifs: string;
fsifw: string;
fsifh: string;
fsid: string;
fsijc: string;
fsiai : string;
fsita : string;
fsatd: string;
fsad: string;
fsabs: string;
fsabsv: string;
fsabsd: string;
fsidf: string;



  constructor(private vds: viewsdataservice) { }

  ngOnInit() {
    this.loadInfo();
  }
  loadInfo(){
   
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    
    // comp_data.headerbackground.ihbi
    // socialngfor: string;
    this.fsbc = comp_els[this.name].styles.fsbc;
    this.fsli = comp_els[this.name].styles.fsli;
    this.fsytb = comp_els[this.name].styles.fsytb;
    this.fsfb = comp_els[this.name].styles.fsfb;
    this.fsib = comp_els[this.name].styles.fsib;
    this.fstb = comp_els[this.name].styles.fstb;
    this.fsfs = comp_els[this.name].styles.fsfs;
    this.fsw = comp_els[this.name].styles.fsw;
    this.fsh = comp_els[this.name].styles.fsh;
    this.fsdib = comp_els[this.name].styles.fsdib;
    this.fsd = comp_els[this.name].styles.fsd;
    this.fsjc = comp_els[this.name].styles.fsjc;
    this.fsifc = comp_els[this.name].styles.fsifc;
    this.fsai = comp_els[this.name].styles.fsai;
    this.fsta = comp_els[this.name].styles.fsta;
    this.fsls = comp_els[this.name].styles.fsls;
    this.fsp = comp_els[this.name].styles.fsp;
    this.fsm = comp_els[this.name].styles.fsm;
    this.fsmbs = comp_els[this.name].styles.fsmbs;
    this.fsmbe = comp_els[this.name].styles.fsbe;
    this.fsmis = comp_els[this.name].styles.fsmis;
    this.fsmie = comp_els[this.name].styles.fsmie;
    this.fspis = comp_els[this.name].styles.fspis;
    this.fslid = comp_els[this.name].styles.fslid;
    this.fslita = comp_els[this.name].styles.fslita;
    this.fsulls = comp_els[this.name].styles.fsulls;
    this.fsifw = comp_els[this.name].styles.fsifw;
    this.fsifh = comp_els[this.name].styles.fsifh;
    this.fsid = comp_els[this.name].styles.fsid;
    this.fsijc = comp_els[this.name].styles.fsijc;
    this.fsiai = comp_els[this.name].styles.fsiai;
    this.fsita = comp_els[this.name].styles.fsita;
    this.fsad = comp_els[this.name].styles.fsad;
    this.fsatd = comp_els[this.name].styles.fsatd;
    this.fsabs = comp_els[this.name].styles.fsabs;
    this.fsidf = comp_els[this.name].styles.fsidf;
    this.fsabsv = comp_els[this.name].styles.fsabsv;
    this.fsabsd = comp_els[this.name].styles.fsabsd;
    this.fssl = comp_data.social.sociallinks;
   
    // const route = this.vds.route_arr;
  //  const social = this.vds.flatten(this.data.social);
  //   // const components = this.vds.flatten(pageroutes[route].components);
  //   const comp_els = 
  //   // this.vds.flatten(this.data.social);
  //    this.data.social;
  //   this.links = comp_els;
      
  //   // console.log(social);
  //   console.log(this.data.social);
  //   console.log(social)
  }
  /***
   * youtube background : fsytb
   * facebook background : fsfb
   * instagram background : fsib
   * twitter background : fstb
   * fsbc : background color
   * fsulls : list style
   * font size : fsfs
   * width : fsw
   * height : fsh
   * fsdib : display inline block
   * fsdf : display flex
   * fsjc : justify content center
   * fsai : align items
   * fsta : text align 
   * fsli : links
   * fsfa : font awesome
   * fsls : list style
   * fsp : padding
   * fsm : margin
   * fsmbs : margin block start
   * fsmbe : margin block end
   * fsmis : margin inline start
   * fsmie : margin inline end
   * fspis : padding inlien start
   * fslid : li display
   * fslita : li textalign
   * fsifc : item font color generic
   * fsifw : width icon
   * fsifh : height icon
   * fsid : display icon
   * fsidf : display flex
   * fsijc : justify content icon
   * fsiai : align items icon
   * fsita : text align icon
   * fsad : icon a display
   * fsatd : icon a text decoration
   * fsabs : icon box shadow
   * fsabsv : icon box shadow value
   * fsabsd : icon box shadow value default
   * 
  */

}
