import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';
import { EzBreadcrumbsComponent } from './components/breadcrumbs.component';
import { EzRouterOutlet } from './directives/router-outlet';
import { EzBreadcrumbs } from './services/breadcrumbs.service';

/**
 * @description
 *
 * Adds the breadcrumbs component and directive.
 *
 * You can import this NgModule multiple times, once for each lazy-loaded module.
 * However, only one `EzBreadcrumbs` service can be active.
 *
 * The `forRoot()` method provides that service in addition to the component and directive.
 */
@NgModule({
  imports: [EzBreadcrumbsComponent, EzRouterOutlet, RouterModule],
  exports: [EzBreadcrumbsComponent, EzRouterOutlet]
})
export class EzBreadcrumbsModule {
  /**
   * Creates and configures a module with the `EzBreadcrumbs` service in addition to the
   * component and directive.
   *
   * When registering the NgModule at the root, import as follows:
   *
   * ```
   * @NgModule({
   *   imports: [EzBreadcrumbsModule.forRoot()]
   * })
   * class MyNgModule {}
   * ```
   *
   * @return The new `NgModule`.
   *
   */
  static forRoot(): ModuleWithProviders<EzBreadcrumbsModule> {
    return {
      ngModule: EzBreadcrumbsModule,
      providers: [{ provide: EzBreadcrumbs }, { provide: EzBreadcrumbsIntl }]
    };
  }
}
