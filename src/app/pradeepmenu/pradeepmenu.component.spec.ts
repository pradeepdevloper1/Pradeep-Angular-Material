import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PradeepmenuComponent } from './pradeepmenu.component';

describe('PradeepmenuComponent', () => {
  let component: PradeepmenuComponent;
  let fixture: ComponentFixture<PradeepmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PradeepmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PradeepmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
