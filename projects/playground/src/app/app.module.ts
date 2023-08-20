import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { EzBreadcrumbsModule } from 'ez-breadcrumbs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { BarDetailComponent } from './bar/detail/detail.component';
import { BarIndexComponent } from './bar/index/index.component';
import { FooComponent } from './foo/foo.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    FooComponent,
    IndexComponent,
    BarIndexComponent,
    BarDetailComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, EzBreadcrumbsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
