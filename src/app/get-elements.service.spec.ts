import { TestBed } from '@angular/core/testing';

import { GetElementsService } from './get-elements.service';

describe('GetElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetElementsService = TestBed.get(GetElementsService);
    expect(service).toBeTruthy();
  });
});
