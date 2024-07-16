import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepButtomComponent } from './next-step-buttom.component';

describe('NextStepButtomComponent', () => {
  let component: NextStepButtomComponent;
  let fixture: ComponentFixture<NextStepButtomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextStepButtomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextStepButtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
