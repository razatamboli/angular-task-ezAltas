import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCardsComponent } from './seller-cards.component';

describe('SellerCardsComponent', () => {
  let component: SellerCardsComponent;
  let fixture: ComponentFixture<SellerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
