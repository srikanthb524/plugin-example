import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-templateexample',
  templateUrl: './templateexample.component.html',
  styleUrls: ['./templateexample.component.css']
})
export class TemplateexampleComponent implements OnInit, AfterViewInit {
  @ViewChild('sayHelloTemplate', { read: TemplateRef })
  sayHelloTemplate!: TemplateRef<any>;
  constructor(private vref:ViewContainerRef) { }
  ngAfterViewInit(){
   this.vref.createEmbeddedView(this.sayHelloTemplate);
  }

  ngOnInit(): void {
  }


}
