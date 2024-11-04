import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnxComponent } from './connx.component';

describe('ConnxComponent', () => {
  let component: ConnxComponent;
  let fixture: ComponentFixture<ConnxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnxComponent]
    });
    fixture = TestBed.createComponent(ConnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
