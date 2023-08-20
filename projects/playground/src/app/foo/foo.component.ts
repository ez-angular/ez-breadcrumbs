import { Component } from '@angular/core';
import { breadcrumb } from 'ez-breadcrumbs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {
  constructor() {
    breadcrumb('Foo');
  }
}
