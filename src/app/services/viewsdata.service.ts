import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { leftJoin } from './join.service';
import { Injectable } from '@angular/core';
import { map, filter, shareReplay } from 'rxjs/operators';
import { newsletter } from './../interfaces/newsletter';
import { Observable,  BehaviorSubject  } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class viewsdataservice {
  private zipcode = new BehaviorSubject('43004');
  currentZipcode = this.zipcode.asObservable();
  public route0$: any;
  private route1$: any;
  private route2$: any;
  realm: any;
  private routes: Observable<any>;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        let r = this.route;
        while (r.firstChild) {
          r = r.firstChild;
        }
        r.params.subscribe(params => {
          this.route0$ = params['parent'];
          this.route1$ = params['child'];
          this.route2$ = params['grandchild'];
        });
      });
  }

  flatten(data: Array<any>) {
    if (data.length > 0) {
      const result = data.reduce((acc, { ...obj }) => {
        acc[obj.name] = obj;
        return acc;
      }, {});
  
      return result;
    } else {
      return null;
    }
  }

  public get route_arr() {
    const obj = [this.route0$, this.route1$, this.route2$];
    let obj2 = '';
    obj.forEach((route) => {
      if (route) {
        obj2 = route;
      }
    })
    return obj2;
  }

  loadContent() {
    const realm = document.location.hostname;
    this.routes = this.afs.collection('organizations', ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      if (this.route0$) {
        query = query.where(
          'pageroutes', 'array-contains', `${this.route0$}`
          ); 
      } else
      if (this.route1$) {
        query = query.where(
          'pageroutes', 'array-contains', `${this.route1$}`
          );       
        } else
      if (this.route2$) {
        query = query.where(
          'pageroutes', 'array-contains', `${this.route2$}`
          );       
        }
      query = query.where('realm', '==', realm);
      return query;
    }).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
      ,
      leftJoin(this.afs, 'templatename', 'templates'),
      shareReplay(1)
    );
    return this.routes;
  }
  addnewsletter(){

  }
}