import { TestBed, inject } from '@angular/core/testing';

import { MockProductService } from './mock-product.service';

describe('MockProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProductService]
    });
  });

  it('should be created', inject([MockProductService], (service: MockProductService) => {
    expect(service).toBeTruthy();
  }));
});
