import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Substance } from './../shared/substance';

/*export interface Substance{
  $key?: string;
  Substance: string;
  ID: number;
  CAS: string;
  Grouping: string;
  Synonyms: string;
  Manufacture: string;
  PhysicalDesc: string;
  IndustryUsage: string;
  BuildingProducts: string;
  PathwaysofExposure: string;
  GovtRegulations: string;
  IndustryRegulations: string;
  created_at:string;
}*/

@Injectable()
export class SubstanceService {
  recipesChanges = new EventEmitter<Substance[]>();
  substances: FirebaseListObservable<Substance[]>;
  substance: Substance;
  
  item: FirebaseObjectObservable<any>;
  constructor(private af:AngularFire) {
    this.substances = this.getSubstances();
  }
/*
  private ToSubstance(substance, id, cas, grouping, synonyms, manufacture, phyicaldesc, industryusage, buildingproducts, pathwaysofexposure, govtregulations, industryregulations) {
  }*/

  public getSubstances() {
    return this.af.database.list('/') as FirebaseListObservable<Substance[]>;
  }

  public getSubstance(substanceId: number) {
    return this.af.database.object('/'+ substanceId) as FirebaseObjectObservable<Substance>;
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