import { TestBed, inject } from '@angular/core/testing';

import { OfferServiceService } from './offer-service.service';

describe('OfferServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfferServiceService]
    });
  });

  it('should ...', inject([OfferServiceService], (service: OfferServiceService) => {
    expect(service).toBeTruthy();
  }));
});
