import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  @Input() title: string;
  @Input() powerLevel: number;

  constructor() { }

  ngOnInit(): void {
  }

}
