import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data = [
    {name: 'Autumn', company: 'Schmidt - Wiza'},
    {name: 'Timothy', company: 'Kuhic - Halvorson'},
    {name: 'Darion', company: 'McClure Group'}
  ];

  constructor() { }

  getUsers(): object[] {
    return this.data;
  }
}
