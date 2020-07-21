import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepstepperComponent } from './pradeepstepper.component';

describe('PradeepstepperComponent', () => {
  let component: PradeepstepperComponent;
  let fixture: ComponentFixture<PradeepstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
