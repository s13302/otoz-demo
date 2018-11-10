import { TestBed } from '@angular/core/testing';

import { InspectorateService } from './inspectorate.service';

describe('InspectorateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InspectorateService = TestBed.get(InspectorateService);
    expect(service).toBeTruthy();
  });
});
