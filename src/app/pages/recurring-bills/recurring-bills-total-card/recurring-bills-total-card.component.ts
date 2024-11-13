import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recurring-bills-total-card',
  templateUrl: './recurring-bills-total-card.component.html',
  styleUrls: ['./recurring-bills-total-card.component.scss']
})
export class RecurringBillsTotalCardComponent {

  @Input() value: number = 0;

}
