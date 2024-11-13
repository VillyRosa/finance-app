import { Component, Input } from '@angular/core';
import { IBudget } from 'src/app/interfaces/budget';

@Component({
  selector: 'app-budgets-summary',
  templateUrl: './budgets-summary.component.html',
  styleUrls: ['./budgets-summary.component.scss']
})
export class BudgetsSummaryComponent {

  @Input() items: (IBudget & {total: number})[] = [];

}
