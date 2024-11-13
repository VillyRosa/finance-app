import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boll',
  templateUrl: './boll.component.html',
  styleUrls: ['./boll.component.scss']
})
export class BollComponent {

  @Input() color: string = 'var(--grey-900)';

}
