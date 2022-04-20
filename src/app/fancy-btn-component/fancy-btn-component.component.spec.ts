import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyBtnComponentComponent } from './fancy-btn-component.component';

describe('FancyBtnComponentComponent', () => {
  let component: FancyBtnComponentComponent;
  let fixture: ComponentFixture<FancyBtnComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancyBtnComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyBtnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
