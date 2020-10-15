import { Component, OnInit } from '@angular/core';
import { IHeroDetail } from '../interfaces/hero.interface';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  detail: IHeroDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
