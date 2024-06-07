import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-custom-stepper',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.sass',
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}