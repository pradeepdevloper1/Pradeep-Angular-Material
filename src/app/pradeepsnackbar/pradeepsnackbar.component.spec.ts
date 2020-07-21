import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepsnackbarComponent } from './pradeepsnackbar.component';

describe('PradeepsnackbarComponent', () => {
  let component: PradeepsnackbarComponent;
  let fixture: ComponentFixture<PradeepsnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepsnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepsnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
