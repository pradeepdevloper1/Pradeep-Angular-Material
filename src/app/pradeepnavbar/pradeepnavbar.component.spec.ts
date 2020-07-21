import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepnavbarComponent } from './pradeepnavbar.component';

describe('PradeepnavbarComponent', () => {
  let component: PradeepnavbarComponent;
  let fixture: ComponentFixture<PradeepnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
