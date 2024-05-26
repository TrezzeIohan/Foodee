import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPageNavbarComponent } from './food-page-navbar.component';

describe('FoodPageNavbarComponent', () => {
  let component: FoodPageNavbarComponent;
  let fixture: ComponentFixture<FoodPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodPageNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
