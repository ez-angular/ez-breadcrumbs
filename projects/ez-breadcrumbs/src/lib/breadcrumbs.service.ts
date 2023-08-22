import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { BreadcrumbRef } from './breadcrumb-ref';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';

/**
 * Service that manages the breadcrumbs.
 */
@Injectable()
export class EzBreadcrumbs {
  private _breadcrumbs = new Map<Object, BreadcrumbRef>();
  private _breadcrumbsSubject = new Subject<BreadcrumbRef[]>();

  /**
   * Observable that emits when breadcrumbs are added, removed or changed.
   */
  readonly breadcrumbs$ = this._breadcrumbsSubject.asObservable();

  /**
   * The home breadcrumb. This is always the first breadcrumb in the list.
   */
  readonly home = new BreadcrumbRef(inject(EzBreadcrumbsIntl).homeBreadcrumbLabel);

  /**
   * Sets the breadcrumb for the given component.
   *
   * @param component The component to set the breadcrumb for.
   * @param breadcrumbRef The breadcrumb to set.
   */
  set(component: Object, breadcrumbRef: BreadcrumbRef) {
    this._breadcrumbs.set(component, breadcrumbRef);
    this.emit();
  }

  /**
   * Deletes the breadcrumb for the given component.
   *
   * @param component The component to delete the breadcrumb for.
   */
  delete(component: Object) {
    this._breadcrumbs.delete(component);
    this.emit();
  }

  private emit(): void {
    this._breadcrumbsSubject.next([this.home, ...Array.from(this._breadcrumbs.values())]);
  }
}
