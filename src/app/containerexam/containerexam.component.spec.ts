import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerexamComponent } from './containerexam.component';

describe('ContainerexamComponent', () => {
  let component: ContainerexamComponent;
  let fixture: ComponentFixture<ContainerexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
