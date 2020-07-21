import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepgridlistComponent } from './pradeepgridlist.component';

describe('PradeepgridlistComponent', () => {
  let component: PradeepgridlistComponent;
  let fixture: ComponentFixture<PradeepgridlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepgridlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepgridlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
