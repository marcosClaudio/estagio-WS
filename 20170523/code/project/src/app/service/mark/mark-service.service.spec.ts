import { TestBed, inject } from '@angular/core/testing';

import { MarkServiceService } from './mark-service.service';

describe('MarkServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkServiceService]
    });
  });

  it('should ...', inject([MarkServiceService], (service: MarkServiceService) => {
    expect(service).toBeTruthy();
  }));
});
