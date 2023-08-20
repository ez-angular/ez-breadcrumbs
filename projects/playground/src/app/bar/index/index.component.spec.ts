import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: BarIndexComponent;
  let fixture: ComponentFixture<BarIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarIndexComponent]
    });
    fixture = TestBed.createComponent(BarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
