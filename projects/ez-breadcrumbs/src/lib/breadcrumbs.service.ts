import { Injectable, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { BreadcrumbRef } from './breadcrumb-ref';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';

@Injectable()
export class EzBreadcrumbs {
  private _breadcrumbs = new Map<Object, BreadcrumbRef>();
  private _breadcrumbsSubject = new Subject<BreadcrumbRef[]>();

  readonly breadcrumbs$ = this._breadcrumbsSubject.asObservable();
  readonly home = new BreadcrumbRef(inject(EzBreadcrumbsIntl).homeBreadcrumbLabel);

  set(component: Object, breadcrumbRef: BreadcrumbRef) {
    this._breadcrumbs.set(component, breadcrumbRef);
    this.emit();
  }

  delete(component: Object) {
    this._breadcrumbs.delete(component);
    this.emit();
  }

  private emit(): void {
    this._breadcrumbsSubject.next([this.home, ...Array.from(this._breadcrumbs.values())]);
  }
}
