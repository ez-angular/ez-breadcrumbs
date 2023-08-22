import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { BreadcrumbRef } from './breadcrumb-ref';
import { EzBreadcrumbsIntl } from './breadcrumbs-intl';
import { EzBreadcrumbsComponent } from './breadcrumbs.component';
import { EzBreadcrumbs } from './breadcrumbs.service';

describe('BreadcrumbsComponent', () => {
  let component: EzBreadcrumbsComponent;
  let fixture: ComponentFixture<EzBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EzBreadcrumbsComponent],
      providers: [
        { provide: BreadcrumbRef, useValue: {} },
        { provide: EzBreadcrumbs, useValue: { breadcrumbs$: of(null) } },
        { provide: EzBreadcrumbsIntl, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(EzBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
