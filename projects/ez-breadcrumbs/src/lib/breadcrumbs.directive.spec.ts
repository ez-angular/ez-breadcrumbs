import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { classWithProviders } from '../testing/class-with-providers';
import { BreadcrumbRef } from './breadcrumb-ref';
import { EzBreadcrumbsDirective } from './breadcrumbs.directive';
import { EzBreadcrumbs } from './breadcrumbs.service';

describe('BreadcrumbsDirective', () => {
  it('should create an instance', () => {
    const directive = classWithProviders(EzBreadcrumbsDirective, [
      { provide: BreadcrumbRef, useValue: {} },
      { provide: EzBreadcrumbs, useValue: { breadcrumbs$: of(null) } },
      { provide: RouterOutlet, useValue: { activateEvents: of(null), deactivateEvents: of(null) } }
    ]);
    expect(directive).toBeTruthy();
  });
});
