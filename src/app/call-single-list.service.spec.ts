import { TestBed } from '@angular/core/testing';

import { CallSingleListService } from './call-single-list.service';

describe('CallSingleListService', () => {
  let service: CallSingleListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallSingleListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
