import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponentComponent } from './btn-component/btn-component.component';
import { FancyBtnComponentComponent } from './fancy-btn-component/fancy-btn-component.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { TemplaterefexpComponent } from './templaterefexp/templaterefexp.component';
import { ContainerexamComponent } from './containerexam/containerexam.component';
import { TemplateexampleComponent } from './templateexample/templateexample.component';
import { PtClassDirective } from './pt-class.directive';
import { ttClassDirective } from './tt-class.directive';
import { FormsModule } from '@angular/forms';
import { AppHighlightDirective } from './app-highlight.directive';
import { BoxComponent } from './box/box.component';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    BtnComponentComponent,
    FancyBtnComponentComponent,
    CardComponentComponent,
    TemplaterefexpComponent,
    ContainerexamComponent,
    TemplateexampleComponent,
    PtClassDirective,
    ttClassDirective,
    AppHighlightDirective,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
