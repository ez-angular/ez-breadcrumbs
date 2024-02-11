import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { EzBreadcrumbsIntl } from "./breadcrumbs-intl";
import { EzBreadcrumbs } from "./services/breadcrumbs.service";

export function provideBreadcrumbs(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: EzBreadcrumbs },
    { provide: EzBreadcrumbsIntl }
  ]);
}
