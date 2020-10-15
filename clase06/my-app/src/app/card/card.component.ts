import { Component, Input, OnInit } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() hero: IHero;
  description: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.hero);
  }
}
