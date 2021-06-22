import { TestBed } from '@angular/core/testing';

import { LanguageDirectionService } from './language-direction.service';

describe('LanguageDirectionService', () => {
  let service: LanguageDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
