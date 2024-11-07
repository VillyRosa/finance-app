import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public minimizeMenu: boolean = JSON.parse(localStorage.getItem('minimizeMenu') || 'false');

  constructor(private location: Location) {}

  public getTitlePage(): string {
    let title = this.location.prepareExternalUrl(this.location.path());
    title = title.replace('/', '');
    title = title.replace('-', ' ');
    title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return title;
  }

  public toggleMenu(): void {
    this.minimizeMenu = !this.minimizeMenu;
    localStorage.setItem('minimizeMenu', JSON.stringify(this.minimizeMenu));
  }

}
