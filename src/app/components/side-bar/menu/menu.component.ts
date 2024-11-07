import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() text: string = '';
  @Input() iconPath: string = '';
  @Input() redirectTo: string = '';
  @Input() noRedirect: boolean = false;
  @Input() minimizeMenu: boolean = false;
  
  constructor(private location: Location, private router: Router) { }

  public isActive(): boolean {
    if (this.noRedirect) return false;
    if (!this.location.path()) return this.text === 'Overview';
    return this.location.path().includes(this.redirectTo.toLowerCase());
  }

  public navigateTo(): void {
    if (this.isActive() || this.noRedirect) return;
    this.router.navigate([this.redirectTo]);
  }

}
