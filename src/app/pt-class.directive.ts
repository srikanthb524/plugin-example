import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ptIf]'
})
export class PtClassDirective {

  _ptif:boolean=true;
  @Input()
  set ptIf(conditon: boolean){
    this._ptif=conditon
    this._UpdateView();
  }
  constructor(private _viewContainer:ViewContainerRef,
    private templateRef:TemplateRef<any>) { }

    _UpdateView() {
      if (this._ptif) {
       this._viewContainer.createEmbeddedView(this.templateRef);
     }
     else {
       this._viewContainer.clear();
   }
  }
}
