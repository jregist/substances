import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SubstanceService } from '../../services/substance.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Substance } from "../../shared/substance";

@Component({
  selector: 'pl-substance',
  templateUrl: 'substance.component.html'
})

export class SubstanceComponent implements OnInit {
  private activeIndex: number;
  private appState:string = 'default';
  substances: Substance[];
  substance:Substance;

  _Substance: string;
  _CAS: string;
  _Grouping: string;
  _Synonyms: string;
  _Manufacture: string;
  _PhysicalDesc: string;
  _IndustryUsage: string;
  _BuildingProducts: string;
  _PathwaysofExposure: string;
  _GovtRegulations: string;
  _IndustryRegulations: string;

  constructor(private fbs: SubstanceService) {}

  ngOnInit() {
    this.fbs.getSubstances().subscribe(
      (substances: Substance[]) => this.substances = substances
    );
  }

   changeState(state, key) {
    console.log('changing state to ' + state);
    if (key) {
      console.log('changing key to '+ key);
      this.activeIndex = key;
    }
    this.appState = state;
  }

  showEdit(substance:Substance) {
    this.changeState('edit', substance.$key);
    this._Substance = substance.Substance;
    this._CAS= substance.CAS;
    this._Grouping= substance.Grouping;
    this._Synonyms= substance.Synonyms;
    this._Manufacture= substance.Manufacture;
    this._PhysicalDesc= substance.PhysicalDesc;
    this._IndustryUsage= substance.IndustryUsage;
    this._BuildingProducts= substance.BuildingProducts;
    this._PathwaysofExposure= substance.PathwaysofExposure;
    this._GovtRegulations= substance.GovtRegulations;
    this._IndustryRegulations= substance.IndustryRegulations;
  }

  showAdd() {
    this.activeIndex = -1;
    this._Substance = '';
    this._CAS = '';
    this._Grouping = '';
    this._Synonyms = '';
    this._Manufacture = '';
    this._PhysicalDesc = '';
    this._IndustryUsage = '';
    this._BuildingProducts = '';
    this._PathwaysofExposure = '';
    this._GovtRegulations = '';
    this._IndustryRegulations = '';
    this.changeState('edit', null);
  }
  deleteSubstance() {
    this.fbs.deleteSubstance(this.activeIndex);
    this.changeState('default', null);
  }

  onSubmit(data) {
    if (this.activeIndex > -1) {
      this.fbs.updateSubstance(this.activeIndex, data);
      this.changeState('detail', this.activeIndex);
    } 
    else {
      var updSubstance = {
        Substance: data.Substance,
        CAS: data.CAS,
        Grouping: data.Grouping,
        Synonyms: data.Synonyms,
        Manufacture: data.Manufacture,
        PhysicalDesc: data.PhysicalDesc,
        IndustryUsage: data.IndustryUsage,
        BuildingProducts: data.BuildingProducts,
        PathwaysofExposure: data.PathwaysofExposure,
        GovtRegulations: data.GovtRegulations,
        IndustryRegulations: data.IndustryRegulations
      }
      this.fbs.addSubstance(updSubstance);
      this.changeState('default', null);
    }
  }
}