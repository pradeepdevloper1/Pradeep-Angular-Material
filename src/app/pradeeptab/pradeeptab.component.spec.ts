import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeeptabComponent } from './pradeeptab.component';

describe('PradeeptabComponent', () => {
  let component: PradeeptabComponent;
  let fixture: ComponentFixture<PradeeptabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeeptabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeeptabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
