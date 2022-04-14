import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRidesComponent } from './driver-rides.component';

describe('DriverRidesComponent', () => {
  let component: DriverRidesComponent;
  let fixture: ComponentFixture<DriverRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
