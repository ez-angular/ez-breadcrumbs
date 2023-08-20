import { Component } from '@angular/core';
import { breadcrumb } from 'ez-breadcrumbs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent {
  constructor() {
    breadcrumb('Bar');
  }
}
