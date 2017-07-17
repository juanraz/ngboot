import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat.service';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      
    });
  });

  it('should ...', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));
});
