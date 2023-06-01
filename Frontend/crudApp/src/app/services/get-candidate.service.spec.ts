import { TestBed } from '@angular/core/testing';

import { GetCandidateService } from './get-candidate.service';

describe('GetCandidateService', () => {
  let service: GetCandidateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
