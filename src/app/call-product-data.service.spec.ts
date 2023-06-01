import { TestBed } from '@angular/core/testing';

import { CallProductDataService } from './call-product-data.service';

describe('CallProductDataService', () => {
  let service: CallProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallProductDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
