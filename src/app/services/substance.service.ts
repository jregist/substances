import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Substance } from './../shared/substance';


@Injectable()
export class SubstanceService {
  recipesChanges = new EventEmitter<Substance[]>();
  substances: FirebaseListObservable<Substance[]>;
  substance: Substance;
  
  item: FirebaseObjectObservable<any>;
  constructor(private af:AngularFire) {
    this.substances = this.getSubstances();
  }

  public getSubstances() {
    return this.af.database.list('/Substances') as FirebaseListObservable<Substance[]>;
  }

  public getSubstance(substanceId: number) {
    return this.af.database.object('/Substances/'+ substanceId) as FirebaseObjectObservable<Substance>;
  }

  public updateSubstance(key, updSubstance) {
    this.substances.update(key, updSubstance);
  }
  
  public deleteSubstance(key) {
    this.substances.remove(key);
  }

  public addSubstance(updSubstance) {
    this.substances.push(updSubstance);
  }
}