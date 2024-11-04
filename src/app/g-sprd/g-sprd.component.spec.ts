import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GSprdComponent } from './g-sprd.component';

describe('GSprdComponent', () => {
  let component: GSprdComponent;
  let fixture: ComponentFixture<GSprdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GSprdComponent]
    });
    fixture = TestBed.createComponent(GSprdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
