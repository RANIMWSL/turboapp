import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieceDetComponent } from './piece-det.component';

describe('PieceDetComponent', () => {
  let component: PieceDetComponent;
  let fixture: ComponentFixture<PieceDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieceDetComponent]
    });
    fixture = TestBed.createComponent(PieceDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
