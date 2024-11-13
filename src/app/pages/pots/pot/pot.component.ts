import { Component, Input } from '@angular/core';
import { IPot } from 'src/app/interfaces/pot';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.scss']
})
export class PotComponent {

  @Input() pot: IPot = {
    name: '',
    target: 0,
    total: 0,
    theme: ''
  };

  public getPercentage(): number {
    return parseFloat(((this.pot.total / this.pot.target) * 100).toFixed(2));
  }

}
