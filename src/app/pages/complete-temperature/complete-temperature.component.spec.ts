import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteTemperatureComponent } from './complete-temperature.component';

describe('CompleteTemperatureComponent', () => {
  let component: CompleteTemperatureComponent;
  let fixture: ComponentFixture<CompleteTemperatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompleteTemperatureComponent]
    });
    fixture = TestBed.createComponent(CompleteTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
