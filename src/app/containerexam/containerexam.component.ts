import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-containerexam',
  templateUrl: './containerexam.component.html',
  styleUrls: ['./containerexam.component.css']
})
export class ContainerexamComponent implements OnInit {
  items= [
    { name:'Angular', active:true},
    { name:'React', active:true},
    { name:'Typescript', active:true},
    { name:'FoxPro', active:false},
    { name:'Javascript', active:true},
    { name:'ASP.NET Core', active:true},
    { name:'DBase', active:false}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
