import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plugin-example';
  show:boolean=true;

  btnClicked($event: any) {
    console.log($event)
    alert('button clicked')
  }
}
