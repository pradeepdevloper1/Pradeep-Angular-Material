import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepselectComponent } from './pradeepselect.component';

describe('PradeepselectComponent', () => {
  let component: PradeepselectComponent;
  let fixture: ComponentFixture<PradeepselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
