# ez-breadcrumbs

An angular component that automatically lists breadcrumbs based on the currently routed components.

## How to use

### Using Standalone Components

First, add a call to `provideBreadcrumbs()` to you `main.ts` file.

```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([/* app routes */]),
    provideBreadcrumbs(),
    // ...
  ]
});
```

Import the `EzBreadcrumbsComponent` into the component and use it in your template via `<ez-breadcrumbs/>`. Also import the `EzRouterOutlet` alongside Angular's `RouterOutlet` in any component containing a (primary) router outlet.

```typescript
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EzRouterOutlet } from 'ez-breadcrumbs';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <ez-breadcrumbs/>
    </header>
    <main>
      <router-outlet/>
    </main>
  `,
  imports: [
    RouterOutlet,
    EzBreadcrumbsComponent,
    EzRouterOutlet
  ]
  standalone: true
})
export class AppComponent { }
```

### Using NgModules

First, add the `EzBreadcrumbsModule` to your `AppModule`'s imports via the `forRoot` method. Also import the `EzBreadcrumbsModule` in all applicable lazy loaded modules.

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

Second, add `<ez-breadcrumbs/>` to your component's template:

```typescript
import { Component, inject } from '@angular/core';

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

### Setting the breadcrumbs

In your routed components use the `breadcrumb` function within the constructor to set the label of the component's breadcrumb. 

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

Note that only components activated in primary outlets can have breadcrumbs.

Also note that the home breadcrumb's default label is `'Home'`. To customize (or translate) the label, see the I18n section below.

If the `EzBreadcrumbsComponent` doesn't fit your needs, you can create your own component and subscribe to the `breadcrumbs$` observable on the `EzBreadcrumbs` service to get a list of breadcrumbs to display. The observable also emits when the content of any breadcrumb changes.

## I18n

Text strings used by the `EzBreadcrumbsComponent` are provided through `EzBreadcrumbsIntl`. Localization of these messages can be done by providing a subclass with translated values in your application root module.
