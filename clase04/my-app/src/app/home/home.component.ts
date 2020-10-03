import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: object[];

  constructor(private userService: UserService) {
    // this.cards = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {
    this.cards = this.userService.getUsers();
  }

}
