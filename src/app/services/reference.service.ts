import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Reference } from './../shared/reference';

@Injectable()
export class ReferenceService {
  item: FirebaseObjectObservable<any>;
  references: FirebaseListObservable<Reference[]>;


  constructor(private af:AngularFire) {
    this.references = this.getReferences();
  }

  getReferences() {  
    return this.af.database.list('/References') as FirebaseListObservable<Reference[]>;
  }

  public getReference(referenceId: number) {
    return this.af.database.object('/References/'+ referenceId) as FirebaseObjectObservable<Reference>;
  }

  addReference(updReference) {
    this.references.push(updReference);
  }

  updateReference(key, updReference) {
    this.references.update(key, updReference);
  }

  deleteReference(key) {
    this.references.remove(key);
  }
}