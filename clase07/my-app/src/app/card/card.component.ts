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
  description: string;
  @Output() showModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.hero);
  }

  redirect(): void {
    localStorage.setItem('hero', JSON.stringify(this.hero));
    sessionStorage.setItem('hero', JSON.stringify(this.hero));
    this.showModal.emit(true);
    // this.router.navigateByUrl('/about');
  }
}
