import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-component',
  template:`<button>
  Click Me
</button>`,
  //templateUrl: './btn-component.component.html',
  styleUrls: ['./btn-component.component.css']
})
export class BtnComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
