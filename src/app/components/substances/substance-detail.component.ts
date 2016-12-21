import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SubstanceService } from '../../services/substance.service';
import { FirebaseObjectObservable } from 'angularfire2';
import { Substance } from "../../shared/substance";

@Component({
  selector: 'rb-substance-detail',
  templateUrl: 'substance-detail.component.html'
})

export class SubstanceDetailComponent implements OnInit, OnDestroy {
  @Input() substance: Substance;
  private substanceIndex: number;
  private subscription: Subscription;

  item: FirebaseObjectObservable<any>;

  constructor(private fbs: SubstanceService, 
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.substanceIndex = params['id'];
        //console.log(this.substanceIndex);      
          this.fbs.getSubstance(this.substanceIndex).subscribe(
            data => {
              this.substance = data;
            });
      });
      return this.substance;
  }

  onEdit() {
    this.router.navigate(['substance', this.substanceIndex, 'edit'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
