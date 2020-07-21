import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepautocompleteComponent } from './pradeepautocomplete.component';

describe('PradeepautocompleteComponent', () => {
  let component: PradeepautocompleteComponent;
  let fixture: ComponentFixture<PradeepautocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepautocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepautocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
