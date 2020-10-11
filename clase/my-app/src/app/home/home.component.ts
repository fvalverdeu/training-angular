import { Component, OnInit } from '@angular/core';

import { SuperheroService } from '../services/superhero.service';
import { ISuperhero } from '../interfaces/superhero.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards: ISuperhero[];

  constructor(private superheroeService: SuperheroService) {
    // this.cards = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {
    this.getAllSuperheroes();
  }

  getAllSuperheroes(): void {
    this.superheroeService.getAll().subscribe(response => {
      this.cards = response;
    }, error => console.log(error));
  }

}
// console.log('first', this.cards);
    // this.userService.getUsers().subscribe(response => {
    //   this.cards = response;
    //   console.log('second', this.cards);
    // }, error => console.log(error));
    // console.log('final', this.cards);
