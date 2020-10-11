import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data = [
    {name: 'Autumn', company: 'Schmidt - Wiza'},
    {name: 'Timothy', company: 'Kuhic - Halvorson'},
    {name: 'Darion', company: 'McClure Group'}
  ];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object[]> {
    return this.http.get<object[]>('assets/data.json');
  }

}
