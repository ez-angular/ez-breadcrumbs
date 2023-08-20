import { Component } from '@angular/core';
import { breadcrumb } from 'ez-breadcrumbs';

@Component({
  selector: 'app-baz',
  templateUrl: './baz.component.html',
  styleUrls: ['./baz.component.scss']
})
export class BazComponent {
  constructor() {
    breadcrumb('Baz');
  }
}
