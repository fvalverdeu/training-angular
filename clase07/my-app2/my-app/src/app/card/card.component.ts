import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() hero: IHero;
  description: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.hero);
  }

  redirect(): void {
    localStorage.setItem('hero', JSON.stringify(this.hero));
    sessionStorage.setItem('hero', JSON.stringify(this.hero));
    this.router.navigateByUrl('/about');
  }
}
