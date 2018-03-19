import { TestBed, inject } from '@angular/core/testing';

import { NicksService } from './nicks.service';

describe('NicksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NicksService]
    });
  });

  it('should be created', inject([NicksService], (service: NicksService) => {
    expect(service).toBeTruthy();
  }));
});
