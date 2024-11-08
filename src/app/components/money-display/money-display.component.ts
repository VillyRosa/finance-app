import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-money-display',
  templateUrl: './money-display.component.html',
  styleUrls: ['./money-display.component.scss']
})
export class MoneyDisplayComponent {

  @Input() value: number = 0;

}
