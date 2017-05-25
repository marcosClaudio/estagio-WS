import { TestBed, inject } from '@angular/core/testing';

import { PanphletService } from './panphlet.service';

describe('PanphletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanphletService]
    });
  });

  it('should ...', inject([PanphletService], (service: PanphletService) => {
    expect(service).toBeTruthy();
  }));
});
