import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BazComponent } from './baz.component';
import { BazIndexComponent } from './index/index.component';
import { QuxComponent } from './qux/qux.component';

const routes: Routes = [
  {
    path: '',
    component: BazComponent,
    children: [
      {
        path: '',
        component: BazIndexComponent
      },
      {
        path: 'qux/:id',
        component: QuxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BazRoutingModule {}
