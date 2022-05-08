import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  selector:"app-dash",
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }
}
