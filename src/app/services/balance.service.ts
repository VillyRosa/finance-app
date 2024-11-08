import { Injectable } from '@angular/core';
import { IBalance } from '../interfaces/balance';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private http: HttpClient) { }

  public get(): Observable<IBalance> {
    return this.http.get<IBalance>('/assets/db/balance.json');
  }

}
