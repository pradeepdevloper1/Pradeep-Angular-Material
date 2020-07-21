import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepprogressspinnerComponent } from './pradeepprogressspinner.component';

describe('PradeepprogressspinnerComponent', () => {
  let component: PradeepprogressspinnerComponent;
  let fixture: ComponentFixture<PradeepprogressspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepprogressspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepprogressspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
