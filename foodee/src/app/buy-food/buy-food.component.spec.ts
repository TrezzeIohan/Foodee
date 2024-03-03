import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFoodComponent } from './buy-food.component';

describe('BuyFoodComponent', () => {
  let component: BuyFoodComponent;
  let fixture: ComponentFixture<BuyFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyFoodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
