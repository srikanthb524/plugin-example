import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective implements OnInit {
  @HostBinding('style.border')
  border!: string;
  constructor() { }
  ngOnInit(): void {
    this.border = '5px solid blue';
  }
  @HostListener('mouseover')
  onMouseOver(){
    this.border = '5px solid green';
    console.log("Mouse over")
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.border = '5px solid yellow';
    console.log("Mouse Leave")
  }

}
