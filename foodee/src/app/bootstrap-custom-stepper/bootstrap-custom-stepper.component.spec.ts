import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCustomStepperComponent } from './bootstrap-custom-stepper.component';

describe('BootstrapCustomStepperComponent', () => {
  let component: BootstrapCustomStepperComponent;
  let fixture: ComponentFixture<BootstrapCustomStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapCustomStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapCustomStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
