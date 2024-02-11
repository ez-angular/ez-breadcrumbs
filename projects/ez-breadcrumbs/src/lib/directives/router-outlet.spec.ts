import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';
import { classWithProviders } from '../../testing/class-with-providers';
import { BreadcrumbRef } from '../breadcrumb-ref';
import { EzBreadcrumbs } from '../services/breadcrumbs.service';
import { EzRouterOutlet } from './router-outlet';

describe('BreadcrumbsDirective', () => {
  it('should create an instance', () => {
    const directive = classWithProviders(EzRouterOutlet, [
      { provide: BreadcrumbRef, useValue: {} },
      { provide: EzBreadcrumbs, useValue: { breadcrumbs$: of(null) } },
      { provide: RouterOutlet, useValue: { activateEvents: of(null), deactivateEvents: of(null) } }
    ]);
    expect(directive).toBeTruthy();
  });
});
