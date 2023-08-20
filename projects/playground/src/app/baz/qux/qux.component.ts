import { Component, Input, inject } from '@angular/core';
import { BreadcrumbRef } from 'ez-breadcrumbs';

@Component({
  selector: 'app-qux',
  templateUrl: './qux.component.html',
  styleUrls: ['./qux.component.scss']
})
export class QuxComponent {
  private _breadcrumbRef = inject(BreadcrumbRef);

  @Input() id: string | undefined;

  ngOnInit(): void {
    this._breadcrumbRef.label = 'Qux ' + this.id;
  }
}
