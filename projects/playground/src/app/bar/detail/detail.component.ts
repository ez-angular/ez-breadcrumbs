import { Component, Input, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BreadcrumbRef } from 'ez-breadcrumbs';
import { DATA } from '../shared/data';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class BarDetailComponent {
  private _breadcrumbRef = inject(BreadcrumbRef);

  data: { id: number; firstName: string; lastName: string; email: string } | undefined;

  form = inject(FormBuilder).group({
    firstName: [''],
    lastName: [''],
    email: ['']
  });

  @Input() id = '';

  onSubmit(): void {
    if (!this.data) {
      return;
    }

    this.data.firstName = this.form.value.firstName || '';
    this.data.lastName = this.form.value.lastName || '';
    this.data.email = this.form.value.email || '';
    this.form.markAsPristine();
    this._breadcrumbRef.label = this.data.firstName + ' ' + this.data.lastName;
  }

  reset(): void {
    if (!this.data) {
      return;
    }

    this.form.reset({
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      email: this.data.email
    });
  }

  ngOnInit(): void {
    this.data = DATA.find(item => item.id === parseInt(this.id));

    if (this.data) {
      this.form.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        email: this.data.email
      });

      this._breadcrumbRef.label = this.data.firstName + ' ' + this.data.lastName;
    }
  }
}
