import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { HeroService } from '../services/hero.service';
import { Observable } from 'rxjs';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: IHero[];
  show: boolean;

  constructor(private heroService: HeroService) {
    // this.cards = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {
    // this.cards = this.userService.getUsers();
    console.log('start');
    this.heroService.getAll().subscribe(response => {
      this.cards = response;
      console.log('getFromObservable', this.cards);
    });
    // console.log('getResponse', this.cards);
  }

  toogleShow(show: boolean): void {
    this.show = show;
  }

}
