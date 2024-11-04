import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccProduitFiniComponent } from './acc-produit-fini.component';

describe('AccProduitFiniComponent', () => {
  let component: AccProduitFiniComponent;
  let fixture: ComponentFixture<AccProduitFiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccProduitFiniComponent]
    });
    fixture = TestBed.createComponent(AccProduitFiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
