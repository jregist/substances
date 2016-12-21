import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../services/firebase.service';
import { SubstanceService } from '../../services/substance.service';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { Substance } from "../../shared/substance";

@Component({
  selector: 'rb-substance-edit',
  templateUrl: 'substance-edit.component.html'
})

export class SubstanceEditComponent implements OnInit, OnDestroy {
  private substance: Substance;
  private substanceForm: FormGroup;
  private substanceIndex: number;
  private subscription: Subscription;
  private appState: string;
  private isNew = true;
  item: FirebaseObjectObservable<any>;

  constructor(private fbs: SubstanceService, 
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {}

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

  ngOnInit() {
    this.isNew = true;
    this.subscription = this.route.params.subscribe(
      (params:any) => 
    {
      
      if (params.hasOwnProperty('id')) {
        this.substanceIndex = +params['id'];
        this.isNew = false;
        this.fbs.getSubstance(this.substanceIndex).subscribe(
            data => {
              this.substance = data;
            });
            //console.log(this.substance);
           return this.substance;
        //this.substance = this.fbs.getSubstance(this.substanceIndex);
      }
      else {
        this.isNew = true;
        this.substance = null;
      }
      //this.initForm();
    }
    );
    /*this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.substanceIndex = params['id'];
        console.log(this.substanceIndex);      
          this.fbs.getSubstance(this.substanceIndex).subscribe(
            data => {
              this.substance = data;
            });
        console.log(this.substance);
      });
      return this.substance;*/
  }

  private initForm() {
    let _Substance = '';    
    let _CAS = '';
    let _Grouping = '';
    let _Synonyms = '';
    let _Manufacture = '';
    let _PhysicalDesc = '';
    let _IndustryUsage = '';
    let _BuildingProducts = '';
    let _PathwaysofExposure = '';
    let _GovtRegulations = '';
    let _IndustryRegulations = '';
  
//  let recipeIngredients: FormArray = new FormArray([]);
    //if (!this.isNew) {
      /*if (this.substance.hasOwnProperty('ingredients')) {
        for (let i = 0; i < this.substance.ingredients.length; i++)
        {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern("\\d+")
              ]),
            })
          );
        }
      }*/
    /*  _Substance = this.thisSubstance.Substance;
      _CAS = this.thisSubstance.CAS;
      _Grouping = this.thisSubstance.Grouping;
      _Synonyms = this.thisSubstance.Synonyms;
      _Manufacture = this.thisSubstance.Manufacture;
      _PhysicalDesc = this.thisSubstance.PhysicalDesc;
      _IndustryUsage = this.thisSubstance.IndustryUsage;
      _BuildingProducts = this.thisSubstance.BuildingProducts;
      _PathwaysofExposure = this.thisSubstance.PathwaysofExposure;
      _GovtRegulations = this.thisSubstance.GovtRegulations;
      _IndustryRegulations = this.thisSubstance.IndustryRegulations;*/
 //   }
     /*this.substanceForm = this.formBuilder.group({
        Substance: [_Substance, Validators.required],
        CAS: [_CAS, Validators.required],
        Grouping: [_Grouping],
        Synonyms: [_Synonyms],
        Manufacture: [_Manufacture],
        PhysicalDesc: [_PhysicalDesc],
        IndustryUsage: [_IndustryUsage],
        BuildingProducts: [_BuildingProducts],
        PathwaysofExposure: [_PathwaysofExposure],
        GovtRegulations: [_GovtRegulations],
        IndustryRegulations: [_IndustryRegulations]
      });*/ 
  }
  onSubmit(substance: Substance) {     
  var updSubstance = {
      _Substance: substance.Substance,
      _CAS: substance.CAS,
      _Grouping: substance.Grouping,
      _Synonyms: substance.Synonyms,
      _Manufacture: substance.Manufacture,
      _PhysicalDesc: substance.PhysicalDesc,
      _IndustryUsage: substance.IndustryUsage,
      _BuildingProducts: substance.BuildingProducts,
      _PathwaysofExposure: substance.PathwaysofExposure,
      _GovtRegulations: substance.GovtRegulations,
      _IndustryRegulations: substance.IndustryRegulations
  }
    console.log(this.fbs.updateSubstance(this.substanceIndex, updSubstance));
  }
  private navigateBack() {
    this.router.navigate(['../']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
