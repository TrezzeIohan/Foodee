import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CustomStepperComponent } from '../custom-stepper/custom-stepper.component';
import { NgTemplateOutlet } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [ 
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CustomStepperComponent,
    NgTemplateOutlet,
    CdkStepperModule
],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.sass'
})
export class MyCartComponent {
    firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required],
      });
      secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required],
      });
      isLinear = false;
    
      constructor(private _formBuilder: FormBuilder) {}

}
