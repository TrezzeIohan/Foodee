import { Component } from '@angular/core';

@Component({
  selector: 'app-bootstrap-custom-stepper',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-custom-stepper.component.html',
  styleUrl: './bootstrap-custom-stepper.component.sass'
})
export class BootstrapCustomStepperComponent {
value:number = 50;
  ngOnInit(){
    const progress = document.getElementById('progress') as HTMLProgressElement ;
      progress.value = this.value;
  }

}
