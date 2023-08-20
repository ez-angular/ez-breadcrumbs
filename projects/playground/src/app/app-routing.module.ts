import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { BarDetailComponent } from './bar/detail/detail.component';
import { BarIndexComponent } from './bar/index/index.component';
import { FooComponent } from './foo/foo.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'foo',
    component: FooComponent,
    children: []
  },
  {
    path: 'bar',
    component: BarComponent,
    children: [
      {
        path: '',
        component: BarIndexComponent
      },
      {
        path: 'detail/:id',
        component: BarDetailComponent
      }
    ]
  },
  {
    path: 'baz',
    loadChildren: () => import('./baz/baz.module').then(m => m.BazModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
