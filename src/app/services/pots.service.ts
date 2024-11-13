import { Injectable } from '@angular/core';
import { IPot } from '../interfaces/pot';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PotsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPot[]> {
    return this.http.get<IPot[]>('/assets/db/pots.json');
  }

}
