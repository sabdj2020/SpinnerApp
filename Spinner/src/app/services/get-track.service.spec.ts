import { TestBed } from '@angular/core/testing';

import { GetTrackService } from './get-track.service';

describe('GetTrackService', () => {
  let service: GetTrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
