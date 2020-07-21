import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepdatatablefilteringComponent } from './pradeepdatatablefiltering.component';

describe('PradeepdatatablefilteringComponent', () => {
  let component: PradeepdatatablefilteringComponent;
  let fixture: ComponentFixture<PradeepdatatablefilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepdatatablefilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepdatatablefilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
