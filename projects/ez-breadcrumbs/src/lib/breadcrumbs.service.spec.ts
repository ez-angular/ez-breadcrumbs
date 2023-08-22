import { classWithProviders } from '../testing/class-with-providers';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';
import { EzBreadcrumbs } from './breadcrumbs.service';

describe('BreadcrumbsService', () => {
  let service: EzBreadcrumbs;

  beforeEach(() => {
    service = classWithProviders(EzBreadcrumbs, [{ provide: EzBreadcrumbsIntl, useValue: {} }]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
