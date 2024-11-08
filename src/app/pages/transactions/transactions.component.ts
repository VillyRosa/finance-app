import { Component, OnInit } from '@angular/core';
import { ITable } from 'src/app/interfaces/table';
import { ITableRow } from 'src/app/interfaces/tableRow';
import { ITransaction } from 'src/app/interfaces/transaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions: ITransaction[] = [];

  constructor(private transactionsService: TransactionsService) { }

  public ngOnInit(): void {
    this.transactionsService.getAll().subscribe((transactions: ITransaction[]) => {
      this.transactions = transactions;
    })
  }

  public toTableRows(): ITableRow[] {
    return this.transactions.map((transaction: ITransaction) => {
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
          [{ type: 'text', value: transaction.category, fontWeight: 'normal' }],
          [{ type: 'text', value: new Date(transaction.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), fontWeight: 'normal' }],
          [{ type: 'money', value: transaction.amount, fontWeight: 'normal' }]
        ]
      }
    });
  }

}
