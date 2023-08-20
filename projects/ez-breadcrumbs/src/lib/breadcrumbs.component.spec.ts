import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzBreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: EzBreadcrumbsComponent;
  let fixture: ComponentFixture<EzBreadcrumbsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EzBreadcrumbsComponent]
    });
    fixture = TestBed.createComponent(EzBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
