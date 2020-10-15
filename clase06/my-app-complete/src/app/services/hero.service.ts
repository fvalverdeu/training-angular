import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IHero } from '../interfaces/hero.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IHero[]> {
    return this.http.get<IHero[]>('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  }
}
