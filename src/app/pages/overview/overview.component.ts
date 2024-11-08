import { Component, OnInit } from '@angular/core';
import { IBalance } from 'src/app/interfaces/balance';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public balance: IBalance = {
    current: 0,
    income: 0,
    expenses: 0
  };

  constructor(private balanceService: BalanceService) { }

  public ngOnInit(): void {
    this.balanceService.get().subscribe((balance: IBalance) => {
      this.balance = balance;
      console.log(balance);
    });
  }

}
