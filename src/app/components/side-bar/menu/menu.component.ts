import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() text: string = '';
  @Input() iconPath: string = '';
  @Input() redirectTo: string = '';
  
  constructor(private location: Location) { }

  public isActive(): boolean {
    return this.location.path().includes(this.redirectTo.toLowerCase());
  }

}
