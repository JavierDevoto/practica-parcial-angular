import { TestBed } from '@angular/core/testing';

import { EmpanadasService } from './empanadas.service';

describe('EmpanadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpanadasService = TestBed.get(EmpanadasService);
    expect(service).toBeTruthy();
  });
});
