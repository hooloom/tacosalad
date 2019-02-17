import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { newsletter } from './../interfaces/newsletter';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class newsletterservice {
  newsletterscollection: AngularFirestoreCollection<newsletter>;
  newsletters: Observable<newsletter[]>;
  newsletterDoc: AngularFirestoreDocument<newsletter>;
  constructor(public afs: AngularFirestore) {
    //this.newsletters = this._afs.collection('newsletters').valueChanges();

    this.newsletterscollection = this.afs.collection('newsletter'
    // , x => x.orderBy('ea', 'asc')
    );
    this.newsletters = this.newsletterscollection.snapshotChanges().pipe(map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as newsletter;
            data.id = a.payload.doc.id;
            return data;
          });

      }));

  }
  getnewsletters() {
    return this.newsletters;
  }
  addnewsletter(newsletter) {
   return this.newsletterscollection.add(newsletter);
  }
  deletenewsletter(newsletter) {
    this.newsletterDoc = this.afs.doc(`newsletters/${newsletter.id}`);
    this.newsletterDoc.delete();
  }
}
