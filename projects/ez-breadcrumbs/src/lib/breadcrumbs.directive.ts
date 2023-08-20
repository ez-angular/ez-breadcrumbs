import { DestroyRef, Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbRef } from './breadcrumb-ref';
import { EzBreadcrumbs } from './breadcrumbs.service';

/**
 * A directive that is used to provide a breadcrumb reference to a component activated by a
 * router outlet and to register the provided breadcrumb in the breadcrumbs service.
 *
 * @note Only primary router outlets are supported.
 */
@Directive({
  selector: 'router-outlet:not([name])',
  providers: [{ provide: BreadcrumbRef, useFactory: () => new BreadcrumbRef() }]
})
export class EzBreadcrumbsDirective {
  private _activeComponent: Object | null = null;

  /**
   * Creates a new instance of the directive.
   */
  constructor() {
    const breadcrumb = inject(BreadcrumbRef);
    const breadcrumbsService = inject(EzBreadcrumbs);
    const routerOutlet = inject(RouterOutlet);

    routerOutlet.activateEvents.pipe(takeUntilDestroyed()).subscribe(component => {
      this._activeComponent = component;
      breadcrumb._setActivatedRouteSnapshot(routerOutlet.activatedRoute.snapshot);
      breadcrumbsService.set(component, breadcrumb);
    });

    routerOutlet.deactivateEvents.pipe(takeUntilDestroyed()).subscribe(component => {
      this._activeComponent = null;
      breadcrumbsService.delete(component);
      breadcrumb._reset();
    });

    inject(DestroyRef).onDestroy(() => {
      breadcrumb._reset();

      if (this._activeComponent === null) {
        return;
      }

      breadcrumbsService.delete(this._activeComponent);
    });
  }
}
