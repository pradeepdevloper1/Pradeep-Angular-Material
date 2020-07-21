import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepdialogComponent } from './pradeepdialog.component';

describe('PradeepdialogComponent', () => {
  let component: PradeepdialogComponent;
  let fixture: ComponentFixture<PradeepdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
