import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepiconComponent } from './pradeepicon.component';

describe('PradeepiconComponent', () => {
  let component: PradeepiconComponent;
  let fixture: ComponentFixture<PradeepiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
