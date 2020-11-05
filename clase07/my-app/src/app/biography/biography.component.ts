import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  @Input() show: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.show = false;
  }

}
