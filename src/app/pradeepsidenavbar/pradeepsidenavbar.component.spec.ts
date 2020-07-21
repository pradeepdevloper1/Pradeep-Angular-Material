import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepsidenavbarComponent } from './pradeepsidenavbar.component';

describe('PradeepsidenavbarComponent', () => {
  let component: PradeepsidenavbarComponent;
  let fixture: ComponentFixture<PradeepsidenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepsidenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
