import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepcardComponent } from './pradeepcard.component';

describe('PradeepcardComponent', () => {
  let component: PradeepcardComponent;
  let fixture: ComponentFixture<PradeepcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
