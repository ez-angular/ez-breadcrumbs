import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';
import { EzBreadcrumbsComponent } from './breadcrumbs.component';
import { EzBreadcrumbsDirective } from './breadcrumbs.directive';
import { EzBreadcrumbs } from './breadcrumbs.service';

@NgModule({
  declarations: [EzBreadcrumbsComponent, EzBreadcrumbsDirective],
  imports: [CommonModule, RouterModule],
  exports: [EzBreadcrumbsComponent, EzBreadcrumbsDirective]
})
export class EzBreadcrumbsModule {
  static forRoot(): ModuleWithProviders<EzBreadcrumbsModule> {
    return {
      ngModule: EzBreadcrumbsModule,
      providers: [{ provide: EzBreadcrumbs }, { provide: EzBreadcrumbsIntl }]
    };
  }
}
