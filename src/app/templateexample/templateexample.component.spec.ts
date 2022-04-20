import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateexampleComponent } from './templateexample.component';

describe('TemplateexampleComponent', () => {
  let component: TemplateexampleComponent;
  let fixture: ComponentFixture<TemplateexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
