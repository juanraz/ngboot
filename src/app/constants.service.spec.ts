import { TestBed, inject } from '@angular/core/testing';

import { ConstantsService } from './constants.service';

describe('ConstantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    });
  });

  it('should ...', inject([ConstantsService], (service: ConstantsService) => {
    expect(service).toBeTruthy();
  }));
});
