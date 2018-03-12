import { TestBed, inject } from '@angular/core/testing';

import { TouchbarService } from './touchbar.service';

describe('TouchbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TouchbarService]
    });
  });

  it('should be created', inject([TouchbarService], (service: TouchbarService) => {
    expect(service).toBeTruthy();
  }));
});
