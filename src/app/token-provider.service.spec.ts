import { TestBed } from '@angular/core/testing';

import { TokenProviderService } from './token-provider.service';

describe('TokenProviderService', () => {
  let service: TokenProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
