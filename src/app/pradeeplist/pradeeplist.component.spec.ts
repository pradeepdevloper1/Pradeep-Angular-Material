import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeeplistComponent } from './pradeeplist.component';

describe('PradeeplistComponent', () => {
  let component: PradeeplistComponent;
  let fixture: ComponentFixture<PradeeplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeeplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeeplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
