import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() user: IUser;
  description: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }
}
