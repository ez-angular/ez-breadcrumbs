import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuxComponent } from './qux.component';

describe('QuxComponent', () => {
  let component: QuxComponent;
  let fixture: ComponentFixture<QuxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuxComponent]
    });
    fixture = TestBed.createComponent(QuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
