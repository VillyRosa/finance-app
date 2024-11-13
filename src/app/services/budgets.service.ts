import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBudget } from '../interfaces/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetsService {

  constructor(public http: HttpClient) { }

  public getAll(): Observable<IBudget[]> {
    return this.http.get<IBudget[]>('/assets/db/budgets.json');
  }

}
