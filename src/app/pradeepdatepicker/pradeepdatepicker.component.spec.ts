import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepdatepickerComponent } from './pradeepdatepicker.component';

describe('PradeepdatepickerComponent', () => {
  let component: PradeepdatepickerComponent;
  let fixture: ComponentFixture<PradeepdatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepdatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepdatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
