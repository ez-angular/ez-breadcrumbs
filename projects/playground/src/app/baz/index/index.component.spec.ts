import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BazIndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: BazIndexComponent;
  let fixture: ComponentFixture<BazIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BazIndexComponent]
    });
    fixture = TestBed.createComponent(BazIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
