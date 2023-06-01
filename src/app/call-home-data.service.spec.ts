import { TestBed } from '@angular/core/testing';

import { CallHomeDataService } from './call-home-data.service';

describe('CallHomeDataService', () => {
  let service: CallHomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallHomeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
