import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({
  selector: '[ttClass]',
})

export class ttClassDirective implements OnInit{
  @Input() ttClass:any;
  private elementSelected = false;
  @HostListener('click')
  private onClick(){
    this.elementSelected = !this.elementSelected;
    if(this.elementSelected){
      this.el.nativeElement.classList.add(this.ttClass);
    }
    else{
      this.el.nativeElement.classList.remove(this.ttClass)
    }

  }
  constructor(private el:ElementRef){}

  ngOnInit(){
    //this.el.nativeElement.classList.add(this.ttClass);

  }
}
