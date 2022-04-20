import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `
  <h2> This is Box Component</h2> `,
 // templateUrl: './box.component.html',
  //styleUrls: ['./box.component.css']
  styles: [
    `
    .highlight {
      color:green;
      display: block;
    }

    .box {
      border: 1px dashed green;
    }
    `
  ],
})
export class BoxComponent implements OnInit {
  title = 'hostBinding';
  @HostBinding('class.highlight') get hasHighlight() { return true; }
  @HostBinding('class.box') get hasBox() { return true }

  constructor() { }

  ngOnInit(): void {
  }

}
