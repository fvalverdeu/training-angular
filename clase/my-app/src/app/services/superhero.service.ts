import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ISuperhero } from '../interfaces/superhero.interface';
@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ISuperhero[]> {
    return this.http.get<ISuperhero[]>('https://akabab.github.io/superhero-api/api/all.json');
  }
}
