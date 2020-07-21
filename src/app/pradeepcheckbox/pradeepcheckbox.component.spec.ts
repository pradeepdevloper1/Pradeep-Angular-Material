import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepcheckboxComponent } from './pradeepcheckbox.component';

describe('PradeepcheckboxComponent', () => {
  let component: PradeepcheckboxComponent;
  let fixture: ComponentFixture<PradeepcheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepcheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
