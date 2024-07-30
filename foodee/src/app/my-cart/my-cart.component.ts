import { Component } from '@angular/core';
import { BootstrapCustomStepperComponent } from '../bootstrap-custom-stepper/bootstrap-custom-stepper.component';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [ BootstrapCustomStepperComponent],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.sass'
})
export class MyCartComponent {

  
  constructor(private navigationService: NavigationService) {}

  goBack(){
    this.navigationService.goBackToParent();
  }

}
