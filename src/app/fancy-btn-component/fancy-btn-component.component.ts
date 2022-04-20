import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-fancy-btn-component',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  //templateUrl: './fancy-btn-component.component.html',
  styleUrls: ['./fancy-btn-component.component.css'],
})
export class FancyBtnComponentComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}
}

