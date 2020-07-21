import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepdatatableComponent } from './pradeepdatatable.component';

describe('PradeepdatatableComponent', () => {
  let component: PradeepdatatableComponent;
  let fixture: ComponentFixture<PradeepdatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepdatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepdatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
