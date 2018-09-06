import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
  <app-ng-style></app-ng-style>

  <br><br>

  <app-css></app-css>

  <br><br>

  <app-class></app-class>

  <br><br>

  <h3>Directives</h3>
  <hr>
  <p [appResaltado]="'red'">
    Hola mundo
  </p>

  <br><br>

  <app-ng-switch></app-ng-switch>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
