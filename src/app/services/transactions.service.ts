import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})

export class TransactionsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>('/assets/db/transactions.json');
  }

}
