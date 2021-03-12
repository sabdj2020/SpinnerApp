import { TestBed } from '@angular/core/testing';

import { GetBandsService } from './get-bands.service';

describe('GetBandsService', () => {
  let service: GetBandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
