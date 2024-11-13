import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recurring-bills-summary',
  templateUrl: './recurring-bills-summary.component.html',
  styleUrls: ['./recurring-bills-summary.component.scss']
})
export class RecurringBillsSummaryComponent {

  @Input() public paidBillsAmount: number = 0;
  @Input() public paidBillsTotalValue: number = 0;
  @Input() public totalUpcomingAmount: number = 0;
  @Input() public totalUpcomingTotalValue: number = 0;
  @Input() public dueSoonAmount: number = 0;
  @Input() public dueSoonTotalValue: number = 0;

}
