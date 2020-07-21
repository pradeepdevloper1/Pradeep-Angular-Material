import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepdatatablepaginationComponent } from './pradeepdatatablepagination.component';

describe('PradeepdatatablepaginationComponent', () => {
  let component: PradeepdatatablepaginationComponent;
  let fixture: ComponentFixture<PradeepdatatablepaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepdatatablepaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepdatatablepaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
