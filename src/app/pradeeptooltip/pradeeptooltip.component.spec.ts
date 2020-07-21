import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeeptooltipComponent } from './pradeeptooltip.component';

describe('PradeeptooltipComponent', () => {
  let component: PradeeptooltipComponent;
  let fixture: ComponentFixture<PradeeptooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeeptooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeeptooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
