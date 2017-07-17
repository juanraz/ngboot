import { TestBed, inject } from '@angular/core/testing';

import { ChatWSService } from './chat-ws.service';

describe('ChatWSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatWSService]
    });
  });

  it('should ...', inject([ChatWSService], (service: ChatWSService) => {
    expect(service).toBeTruthy();
  }));
});
