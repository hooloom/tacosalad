
import { newsletterservice } from './../../services/newsletter.service';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { viewsdataservice } from './../../services/viewsdata.service';
import { map, take, debounceTime, delay } from 'rxjs/operators';
import { newsletter } from 'src/app/interfaces/newsletter';





@Component({
  selector: 'footernewsletter',
  templateUrl: './footernewsletter.component.html',
  styleUrls: ['./footernewsletter.component.css'],
  providers: [newsletterservice]
})
export class footernewsletterComponent implements OnInit {
nlf: FormGroup;

@Input() data: any;

name = 'footernewsletter';
fndi = "http://localhost:4200/assets/images/fallback.jpg";
fnd: any;
fnh: any;
fni: string;
fno = 100;
fnp: string;
fngp: string;
fnr: string;
fns: any;
inbi: boolean;
fnc: string;
fnpb: boolean;
fntp: string;
fnto: string;
fnscp: string;
fnsco: string;
fnsw: string;
fnw: string;
fntm: string;
fnma: string;
fnfp: string;
fnft: string;
fnfta: string;
fnfai: string;
fnfml: string;
fnfmr: string;
fnflh: string;
fnfd: string;
fnfmb: string;
fnfva: string;
fnfh3fs: string;
fnfh3c: string;
fnfh3lh: string;
fnfh3fm: string;
fnfh3fw: string;
fnfdml: string;
fnfdlh: string;
fnfdbc: string;
fnfdd: string;
fnfdmb: string;
fnfdva: string;
fnfifs: string;
fnfipl: string;
fnfif: string;
fnfilh: string;
fnfib: string;
fnfiw: string;
fnfidml: string;
fnfidlh: string;
fnfidbc: string;
fnfidd: string;
fnfidm: string;
fnfidva: string;
fnfidw: string;
fnfidipl: string;
fnfidif: string;
fnfidilh: string;
fnfidifs: string;
fnfidib: string;
fnfidiw: string;
fnfiddlh: string;
fnfiddml: string;
fnfiddd: string;
fnfiddmb: string;
fnfiddva: string;
fnfiddbbs: string;
fnfiddbbsd: string;
fnfiddbbc: string;
fnfiddbbcd: string;
fnfiddbucu: string;
fnfiddbubc: string;
fnfiddbuc: string;
fnfiddbufw: string;
fnfiddbubcfs: string;
fnfiddbuo: string;
fnfiddbulh: string;
fnfiddbuw: string;
fnfidmc: string;
fnfdfl: string;
fnfdmt: string;
fnfpbb: string;

  constructor(private vds: viewsdataservice,
              private fb: FormBuilder,
              private afs: AngularFirestore,
              private nws: newsletterservice) { 
                this.nlf = this.fb.group({
                  ea: [
                    '',[
                    Validators.required,
                    Validators.minLength(5),
                    Validators.email,
                  ],
                    [CustomValidator.ea(this.afs)]
                    
                  ],
                  zc: [
                    '',[
                    Validators.maxLength(5),
                    Validators.required]
                  ]
                },{ updateOn: 'blur' })
                
              }
  
  ngOnInit() {
    this.loadInfo();
   
    
 
    
  }
  get ea(){
    
    return this.nlf.get('ea');
  }
   get zc(){
     return this.nlf.get('zc');
 }
  loadInfo() {
    const comp_els = this.vds.flatten(this.data.components);
    const comp_data = this.vds.flatten(comp_els[this.name].componentdata);
    // console.log(comp_data)
    this.fnd = comp_els[this.name].styles.fnd;
    this.fnh = comp_els[this.name].styles.fnh;
    this.fni = comp_els[this.name].styles.fni;
    this.fnfpbb = comp_els[this.name].styles.fnfpbb;

    this.inbi = comp_data.footernewsletter.inhbi;
    this.fnpb = comp_data.footernewsletter.published;
    
    this.fnp = comp_els[this.name].styles.fnp;
    this.fngp = comp_els[this.name].styles.fngp;
    this.fnr = comp_els[this.name].styles.fnr;
    this.fns = comp_els[this.name].styles.fns;  
    this.fnc = comp_els[this.name].styles.fnc; 
    this.fntp = comp_els[this.name].styles.fntp; 
    this.fnto = comp_els[this.name].styles.fnto;
    this.fnscp = comp_els[this.name].styles.fnscp;
    this.fnsw = comp_els[this.name].styles.fnsw;
    this.fnw = comp_els[this.name].styles.fnw;
    this.fntm = comp_els[this.name].styles.fntm;
    this.fnma = comp_els[this.name].styles.fnma;
    this.fnfp = comp_els[this.name].styles.fnfp;
    this.fnft = comp_els[this.name].styles.fnft;
    this.fnfta = comp_els[this.name].styles.fnfta;
    this.fnfai = comp_els[this.name].styles.fnfai;
    this.fnfml = comp_els[this.name].styles.fnfml;
    this.fnfmr = comp_els[this.name].styles.fnfmr;
    this.fnflh = comp_els[this.name].styles.fnflh;
    this.fnfd = comp_els[this.name].styles.fnfd;
    this.fnfmb = comp_els[this.name].styles.fnfmb;
    this.fnfva = comp_els[this.name].styles.fnfva;
    this.fnfh3fs = comp_els[this.name].styles.fnfh3fs;
    this.fnfh3c = comp_els[this.name].styles.fnfh3c;
    this.fnfh3lh = comp_els[this.name].styles.fnfh3lh;
    this.fnfh3fm = comp_els[this.name].styles.fnfh3fm;
    this.fnfh3fw = comp_els[this.name].styles.fnfh3fw;
    this.fnfdml = comp_els[this.name].styles.fnfdml;
    this.fnfdlh = comp_els[this.name].styles.fnfdlh;
    this.fnfdbc = comp_els[this.name].styles.fnfdbc;
    this.fnfdmb = comp_els[this.name].styles.fnfdmb;
    this.fnfdva = comp_els[this.name].styles.fnfdva;
    this.fnfifs = comp_els[this.name].styles.fnfifs;
    this.fnfipl = comp_els[this.name].styles.fnfipl;
    this.fnfif = comp_els[this.name].styles.fnfif;
    this.fnfilh = comp_els[this.name].styles.fnfilh;
    this.fnfib = comp_els[this.name].styles.fnfib;
    this.fnfiw = comp_els[this.name].styles.fnfiw;
    this.fnfidml = comp_els[this.name].styles.fnfidml;
    this.fnfidlh = comp_els[this.name].styles.fnfidlh;
    this.fnfidbc = comp_els[this.name].styles.fnfidbc;
    this.fnfidd = comp_els[this.name].styles.fnfidd;
    this.fnfidm = comp_els[this.name].styles.fnfidmb;
    this.fnfidva = comp_els[this.name].styles.fnfidva;
    this.fnfidw = comp_els[this.name].styles.fnfidw;
    this.fnfidipl = comp_els[this.name].styles.fnfidipl;
    this.fnfidif = comp_els[this.name].styles.fnfidif;
    this.fnfidilh = comp_els[this.name].styles.fnfidilh;
    this.fnfidifs = comp_els[this.name].styles.fnfidifs;
    this.fnfidib = comp_els[this.name].styles.fnfidib;
    this.fnfidiw = comp_els[this.name].styles.fnfidiw;
    this.fnfiddlh = comp_els[this.name].styles.fnfiddlh;
    this.fnfiddml = comp_els[this.name].styles.fnfiddml;
    this.fnfiddd = comp_els[this.name].styles.fnfiddd;
    this.fnfiddmb = comp_els[this.name].styles.fnfiddmb;
    this.fnfiddva = comp_els[this.name].styles.fnfiddva;
    this.fnfiddbbs = comp_els[this.name].styles.fnfiddbbs;
    this.fnfiddbbsd = comp_els[this.name].styles.fnfiddbbsd;
    this.fnfiddbbc = comp_els[this.name].styles.fnfiddbbc;
    this.fnfiddbbcd = comp_els[this.name].styles.fnfiddbbcd;
    this.fnfiddbucu = comp_els[this.name].styles.fnfiddbucu;
    this.fnfiddbubc = comp_els[this.name].styles.fnfiddbubc;
    this.fnfiddbuc = comp_els[this.name].styles.fnfiddbuc;
    this.fnfiddbufw = comp_els[this.name].styles.fnfiddbufwl
    this.fnfiddbubcfs = comp_els[this.name].styles.fnfiddbubcfs;
    this.fnfiddbuo = comp_els[this.name].styles.fnfiddbuo;
    this.fnfiddbulh = comp_els[this.name].styles.fnfiddbulh;
    this.fnfiddbuw = comp_els[this.name].styles.fnfiddbuw;
    this.fnfidmc = comp_els[this.name].styles.fnfidmc;
    this.fnfdfl = comp_els[this.name].styles.fnfdfl;
    this.fnfdmt = comp_els[this.name].styles.fnfdmt;

  }
  onSubmit(): void {
    this.nws.addnewsletter(this.nlf.value);
    // .then(data => console.log(data))
    // .catch(err => console.log(err));;
  }   
}
export class CustomValidator {
  
  static ea(afs: AngularFirestore) {
    
    return (control: AbstractControl) => {
      
      const ea = control.value.toLowerCase();
      const realm = document.location.hostname;
      console.log(realm);
      console.log(ea)
      return afs.collection('newsletter', ref => ref
      .where('ea', '==', `${ea}`))        
      .valueChanges().pipe(
        
        // tap(v => {
        //   console.log(v);
        // }),
      
          // debounceTime(2000),
          take(1),
          map(arr => arr.length ? { eaAvailable: false } : null )
          )
        
    }
    
  }
 

}



