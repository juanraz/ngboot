import { TestBed, inject } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
    });
  });

  it('should ...', inject([MessagesService], (service: MessagesService) => {
    expect(service).toBeTruthy();
  }));
});
