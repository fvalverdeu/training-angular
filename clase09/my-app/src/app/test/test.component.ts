import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temple-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  valor = 0;
  logs = [];
  show = true;
  nombres = ['Lizeth', 'Douglas', 'Iliana', 'Elisha', 'Taryn', 'Davonte', 'Jennifer', 'Josue'];

  constructor() { }

  ngOnInit(): void {
  }

  sumar(): void {
    this.valor += 1;
  }

  listLogs(log: string): void {
    this.logs.push(log);
  }

  toogle(): void {
    this.show = !this.show;
  }

}
