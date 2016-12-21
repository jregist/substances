import { Component, OnInit, Input } from '@angular/core';
import { Substance } from '../../shared/substance';

@Component({
  selector: 'substance-item',
  templateUrl: 'substance-item.component.html'
})
export class SubstanceItemComponent {
  @Input() substance: Substance;
  @Input() substanceId: number;
}
