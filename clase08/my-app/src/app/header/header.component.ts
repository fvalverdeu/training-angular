import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private router: Router) {
    this.title = 'Angular 10';
  }

  ngOnInit(): void {
  }

  contact(): void {
    this.router.navigateByUrl('/contact');
  }
}
