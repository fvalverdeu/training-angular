import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit, OnDestroy, OnChanges {

  @Input() value = 0;
  @Output() log: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.log.emit('constructor');
  }

  ngOnInit(): void {
    this.log.emit('ngOnInit');
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    this.log.emit(`ngOnChanges ${simpleChanges}`);
  }

  ngOnDestroy(): void {
    this.log.emit('ngOnDestroy');
  }

}
