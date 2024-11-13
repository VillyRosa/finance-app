import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IBudget } from 'src/app/interfaces/budget';
import { ITransaction } from 'src/app/interfaces/transaction';
import { BudgetsService } from 'src/app/services/budgets.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {

  public budgets: IBudget[] = [];
  public transactions: ITransaction[] = [];

  constructor(private budgetsService: BudgetsService, private transactionsService: TransactionsService) { }

  public ngOnInit(): void {
    forkJoin([this.budgetsService.getAll(), this.transactionsService.getAll()]).subscribe(([budgets, transactions]) => {
      this.budgets = budgets;
      this.transactions = transactions;
    });
  }

  public toSummaryItems(): (IBudget & {total: number})[] {
    return this.budgets.map(budget => {
      const total = this.transactions.reduce((acc, transaction) => {
        return 1;
      }, 0);
      return { ...budget, total };
    });
  }

}
