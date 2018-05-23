import { TestBed, inject } from '@angular/core/testing';

import { VrService } from './vr.service';

describe('VrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VrService]
    });
  });

  it('should be created', inject([VrService], (service: VrService) => {
    expect(service).toBeTruthy();
  }));
});
