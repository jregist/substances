import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { FirebaseService } from '../../services/firebase.service';
import {SubstanceService } from '../../services/substance.service';
import { Substance } from '../../shared/substance';


@Component({
  selector: 'substancetest',
  templateUrl: './substance-test.component.html'
})

export class SubstanceTestComponent implements OnInit{
  substances: Substance[];
  substance: Substance;

  constructor(private _firebaseService: SubstanceService) {
  }
    ngOnInit() {
    this._firebaseService.getSubstance(4).subscribe(
      data => {
        this.substance = data;
    });
    console.log(this.substance);
    return this.substance;
  }
}
