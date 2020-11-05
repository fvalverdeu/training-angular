import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() title: string;
  @Input() powerLevel: number;
  @ViewChild('level', { static: false }) power: ElementRef;
  color: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    // valor = condicion ? valor-si-es-true : valor-si-es-false
    this.color = this.powerLevel < 66.6 ? this.powerLevel < 33.3 ? 'red' : 'yellow' : 'rgb(63, 243, 108)';
  }

  ngAfterViewInit(): void {
    this.power.nativeElement.style.width = `${this.powerLevel}%`;
    this.power.nativeElement.style.borderColor = this.color;
    this.power.nativeElement.style.background = this.color;
  }

}
