import { Component, OnInit } from '@angular/core';
import { ITableRow } from 'src/app/interfaces/tableRow';
import { ITransaction } from 'src/app/interfaces/transaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-recurring-bills',
  templateUrl: './recurring-bills.component.html',
  styleUrls: ['./recurring-bills.component.scss']
})
export class RecurringBillsComponent implements OnInit {

  public recurringBills: ITransaction[] = [];

  constructor(private transactionsService: TransactionsService) {}

  public ngOnInit(): void {
    this.transactionsService.getAll().subscribe((transactions: ITransaction[]) => {
      this.recurringBills = transactions.filter((transaction: ITransaction) => transaction.recurring);
    });
  }

  public toTableRows(): ITableRow[] {
    return this.recurringBills.map((transaction: ITransaction) => {
      return {
        cells: [
          [
            {
              type: 'avatar',
              value: transaction.avatar,
              fontWeight: 'normal'
            },
            {
              type: 'text',
              value: transaction.name,
              fontWeight: 'bold'
            }
          ],
          [{ type: 'text', value: `Monthly - ${new Date(transaction.date).getDate()}`, fontWeight: 'normal' }],
          [{ type: 'money', value: transaction.amount, fontWeight: 'normal' }]
        ]
      }
    });
  }

}
