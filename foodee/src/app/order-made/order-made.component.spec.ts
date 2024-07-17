import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMadeComponent } from './order-made.component';

describe('OrderMadeComponent', () => {
  let component: OrderMadeComponent;
  let fixture: ComponentFixture<OrderMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderMadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
