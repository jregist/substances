import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ReferenceService } from '../../services/reference.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Reference } from "../../shared/reference";

@Component({
  selector: 'pl-reference',
  templateUrl: './reference.component.html'
})
export class ReferenceComponent implements OnInit {
  private activeIndex: number;
  private appState:string = 'default';
  private references: Reference[];
  private reference:Reference;

  _ReferenceName: string;
  _ReferenceId:number;
  _ReferenceURL: string;
  _ReferenceOrganization: string;
  _ReferenceDesc: string;

  constructor(private fbs: ReferenceService) { }

  ngOnInit() {
  this.fbs.getReferences().subscribe(
      (references: Reference[]) => this.references = references
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
  
  showAdd() {
    this.changeState('add', null);
    this._ReferenceName = '';
    this._ReferenceId = null;
    this._ReferenceURL = '';
    this._ReferenceOrganization = '';
    this._ReferenceDesc = '';
  }

  showEdit(reference:Reference) {
    this.changeState('edit', reference.$key);
    this._ReferenceName = reference.ReferenceName;
    this._ReferenceId = reference.ReferenceId;
    this._ReferenceURL = reference.ReferenceURL;
    this._ReferenceOrganization = reference.ReferenceOrganization;
    this._ReferenceDesc = reference.ReferenceDesc;
  }
  deleteReference() {

  }
   onSubmit(data) {
    if (this.activeIndex > -1) {
      this.fbs.updateReference(this.activeIndex, data);
      this.changeState('detail', this.activeIndex);
    } 
    else {
      var updReference = {
        ReferenceName: data.ReferenceName, 
        ReferenceId: data.ReferenceId,
        ReferenceURL: data.ReferenceURL,
        ReferenceOrganization: data.ReferenceOrganization,
        ReferenceDesc: data.ReferenceDesc
      }
      this.fbs.addReference(updReference);
      this.changeState('default', null);
    }
  }


}
