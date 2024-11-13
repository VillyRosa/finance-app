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

  public getTotalBillsValue(): number {
    return this.recurringBills.reduce((acc: number, transaction: ITransaction) => acc + transaction.amount, 0) * -1;
  }

  public getPaidBills(): ITransaction[] {
    const today = new Date();
    const todayDay = today.getDate();
    return this.recurringBills.filter((transaction: ITransaction) => {
      const transactionDay = new Date(transaction.date).getDate();
      return transactionDay <= todayDay;
    });
  }

  public getUnpaidBills(): ITransaction[] {
    const today = new Date();
    const todayDay = today.getDate();
    return this.recurringBills.filter((transaction: ITransaction) => {
      const transactionDay = new Date(transaction.date).getDate();
      return transactionDay > todayDay;
    });
  }

  public getTotalValue(transactions: ITransaction[]): number {
    return transactions.reduce((acc: number, transaction: ITransaction) => acc + transaction.amount, 0) * -1;
  }

}
