import { TestBed } from '@angular/core/testing';

import { EasyaccessService } from './easyaccess.service';

describe('EasyaccessService', () => {
  let service: EasyaccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyaccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
