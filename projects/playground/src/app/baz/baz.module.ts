import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EzBreadcrumbsModule } from 'ez-breadcrumbs';
import { BazRoutingModule } from './baz-routing.module';
import { BazComponent } from './baz.component';
import { BazIndexComponent } from './index/index.component';
import { QuxComponent } from './qux/qux.component';

@NgModule({
  declarations: [BazComponent, QuxComponent, BazIndexComponent],
  imports: [CommonModule, BazRoutingModule, EzBreadcrumbsModule]
})
export class BazModule {}
