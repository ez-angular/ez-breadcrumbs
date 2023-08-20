import { Component } from '@angular/core';
import { DATA } from '../shared/data';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class BarIndexComponent {
  data = DATA;
}
