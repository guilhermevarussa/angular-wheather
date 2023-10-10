import { TestBed } from '@angular/core/testing';

import { NewWheatherService } from './new-wheather.service';

describe('NewWheatherService', () => {
  let service: NewWheatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWheatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
