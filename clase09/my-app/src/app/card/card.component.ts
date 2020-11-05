import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IHero } from '../interfaces/hero.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() hero: IHero;
  @Output() showModal: EventEmitter<number> = new EventEmitter<number>();
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

  openModal(): void {
    this.showModal.emit(this.hero.id);
  }
}
