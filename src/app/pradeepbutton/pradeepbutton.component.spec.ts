import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepbuttonComponent } from './pradeepbutton.component';

describe('PradeepbuttonComponent', () => {
  let component: PradeepbuttonComponent;
  let fixture: ComponentFixture<PradeepbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
