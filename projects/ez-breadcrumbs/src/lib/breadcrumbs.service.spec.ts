import { TestBed } from '@angular/core/testing';

import { EzBreadcrumbs } from './breadcrumbs.service';

describe('BreadcrumbsService', () => {
  let service: EzBreadcrumbs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzBreadcrumbs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
