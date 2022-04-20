import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefexpComponent } from './templaterefexp.component';

describe('TemplaterefexpComponent', () => {
  let component: TemplaterefexpComponent;
  let fixture: ComponentFixture<TemplaterefexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplaterefexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
