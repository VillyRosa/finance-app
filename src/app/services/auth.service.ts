import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(): void {
    localStorage.setItem('token', 'JWT');
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }
  
}
