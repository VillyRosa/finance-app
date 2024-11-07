import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent {

  public title!: 'Login' | 'Sign Up';

  constructor(private location: Location, private router: Router, private authService: AuthService) {
    this.title = this.location.path().includes('login') ? 'Login' : 'Sign Up';
  }

  public onSubmit(form: NgForm): void {
    this.authService.login();
    this.router.navigate(['/overview']);
  }

}
