import { TestBed } from '@angular/core/testing';

import { DepartmentSharedService } from './department-shared.service';

describe('DepartmentSharedService', () => {
  let service: DepartmentSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
