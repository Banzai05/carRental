import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCompComponent } from './cars-comp.component';

describe('CarsCompComponent', () => {
  let component: CarsCompComponent;
  let fixture: ComponentFixture<CarsCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
