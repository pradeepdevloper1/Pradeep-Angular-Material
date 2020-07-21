import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepinputComponent } from './pradeepinput.component';

describe('PradeepinputComponent', () => {
  let component: PradeepinputComponent;
  let fixture: ComponentFixture<PradeepinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
