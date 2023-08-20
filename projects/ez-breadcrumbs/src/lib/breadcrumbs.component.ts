import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, merge, startWith, switchMap } from 'rxjs';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';
import { EzBreadcrumbs } from './breadcrumbs.service';

/**
 * A component for displaying breadcrumbs.
 */
@Component({
  selector: 'ez-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./breadcrumbs.component.scss'],
  host: {
    'class': 'ez-breadcrumbs',
    'role': 'navigation',
    '[attr.aria-label]': 'ariaLabel'
  }
})
export class EzBreadcrumbsComponent {
  /**
   * The breadcrumbs to display.
   */
  readonly breadcrumbs$ = inject(EzBreadcrumbs).breadcrumbs$.pipe(
    takeUntilDestroyed(),
    switchMap(breadcrumbs =>
      merge(...breadcrumbs.map(b => b.stateChanges)).pipe(
        map(() => breadcrumbs),
        startWith(breadcrumbs)
      )
    ),
    map(breadcrumbs => breadcrumbs.filter(breadcrumb => breadcrumb.label !== ''))
  );

  /**
   * The label of the component read by screen readers.
   */
  @Input() ariaLabel: string = inject(EzBreadcrumbsIntl).ariaLabel;
}
