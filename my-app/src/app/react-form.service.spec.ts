import { TestBed, inject } from '@angular/core/testing';

import { ReactFormService } from './react-form.service';

describe('ReactFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactFormService]
    });
  });

  it('should be created', inject([ReactFormService], (service: ReactFormService) => {
    expect(service).toBeTruthy();
  }));
});
