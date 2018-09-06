import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `

    <h3>CSS Component</h3>
    <hr>

    <p>
      Hola mundo desde css.component
    </p>
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
