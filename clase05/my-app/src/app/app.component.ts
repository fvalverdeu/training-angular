import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  cards: number[];

  constructor() {
    this.cards = [1, 2, 3, 4, 5, 6];
  }
}
