import { TestBed } from '@angular/core/testing';

import { AuthComponentsService } from './auth-components.service';

describe('AuthComponentsService', () => {
  let service: AuthComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
