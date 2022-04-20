import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templaterefexp',
  templateUrl: './templaterefexp.component.html',
  styleUrls: ['./templaterefexp.component.css']
})
export class TemplaterefexpComponent implements OnInit {
  title:any='Template Refer Example'
  constructor() { }

  ngOnInit(): void {
  }
  sayHello(firstName: { value: string; }, lastName: { value: string; }) {
    alert('Hello '+firstName.value+' '+ lastName.value)
  }
}
