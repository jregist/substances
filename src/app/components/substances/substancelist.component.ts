import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../../services/firebase.service';
import {SubstanceService } from '../../services/substance.service';
import { Substance } from '../../shared/substance';


@Component({
  selector: 'substancelist',
  templateUrl: './substancelist.component.html'
})

export class SubstanceListComponent implements OnInit{
  substances: Substance[];
  substance:Substance;

  constructor(private _firebaseService: SubstanceService) {
  }
    ngOnInit() {
    this._firebaseService.getSubstances().subscribe(
      (substances: Substance[]) => this.substances = substances
    );    
  }
}
