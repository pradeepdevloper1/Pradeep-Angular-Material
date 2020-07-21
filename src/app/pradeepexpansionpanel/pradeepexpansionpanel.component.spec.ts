import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepexpansionpanelComponent } from './pradeepexpansionpanel.component';

describe('PradeepexpansionpanelComponent', () => {
  let component: PradeepexpansionpanelComponent;
  let fixture: ComponentFixture<PradeepexpansionpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepexpansionpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepexpansionpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
