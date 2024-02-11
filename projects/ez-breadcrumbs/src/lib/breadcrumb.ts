import { inject } from '@angular/core';
import { BreadcrumbRef } from './breadcrumb-ref';

/**
 * Shorthand for setting a breadcrumb label within a routed component's constructor.
 *
 * @param label The label to set.
 */
export function breadcrumb(label: string): void {
  inject(BreadcrumbRef).label = label;
}
