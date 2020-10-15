import { Component, OnInit } from '@angular/core';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hero: IHero;

  constructor() { }

  ngOnInit(): void {
    this.hero = JSON.parse(localStorage.getItem('hero'));
  }

}
