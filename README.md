# ez-breadcrumbs

An angular component that automatically lists breadcrumbs based on the currently routed components.

## Usage

> **_TL;DR:_** Import `EzBreadcrumbsModule.forRoot()`, add `<ez-breadcrumbs/>`, use `breadcrumb('Label')` or an injected `BreadcrumbRef`'s label property to set a routed component's breadcrumb.

First, add the `EzBreadcrumbsModule` to your `AppModule`'s imports via the `forRoot` method:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EzBreadcrumbsModule } from 'ez-breadcrumbs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EzBreadcrumbsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

> **_NOTE:_** Also import the `EzBreadcrumbsModule` in all applicable lazy loaded modules (without using `forRoot`).

Second, add the `EzBreadcrumbsComponent` to your template:

```typescript
import { Component, inject } from '@angular/core';
import { BreadcrumbsService } from 'ez-breadcrumbs';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <ez-breadcrumbs/>
    </header>
    <main>
      <router-outlet/>
    </main>
  `
})
export class AppComponent { }
```
Finally, in your routed components use the `breadcrumb` function in the constructor to set the label of the component's breadcrumb. 

```typescript
import { Component } from '@angular/core';
import { breadcrumb } from 'ez-breadcrumbs';

@Component({
  selector: 'app-foo',
  template: `
    <p>foo works!</p>
  `
})
export class FooComponent {
  constructor() {
    breadcrumb('Foo');
  }
}
```
> **_NOTE:_** Breadcrumbs will only be shown if they have a label set. 

Alternatively, inject a `BreadcrumbRef` and use it to set the label. This way, the label can be updated at any time.

```typescript
import { Component, inject } from '@angular/core';
import { BreadcrumbRef } from 'ez-breadcrumbs';

@Component({
  selector: 'app-foo',
  template: `
    <p>foo works!</p>
  `
})
export class FooComponent {
  private _breadcrumb = inject(BreadcrumbRef);

  ngOnInit(): void {
    this._breadcrumb.label = 'Foo'
  }
}
```

> **_NOTE:_** Only components activated in primary outlets can have breadcrumbs.

> **_NOTE:_** The home breadcrumb's default label is `'Home'`. To customize (or translate) the label, see the I18n section below.

If the `EzBreadcrumbsComponent` doesn't fit your needs, you can create your own component and subscribe to the `breadcrumbs$` observable on the `EzBreadcrumbs` service to get a list of breadcrumbs to display. The observable also emits when the contents of any breadcrumb change.

## I18n

Text strings used by the `EzBreadcrumbsComponent` are provided through `EzBreadcrumbsIntl`. Localization of these messages can be done by providing a subclass with translated values in your application root module.
