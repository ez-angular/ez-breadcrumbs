import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: BarDetailComponent;
  let fixture: ComponentFixture<BarDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarDetailComponent]
    });
    fixture = TestBed.createComponent(BarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
