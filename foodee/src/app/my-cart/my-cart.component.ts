import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.sass'
})
export class MyCartComponent {
const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

Array.from(stepButtons).forEach((button,index) => {
    button.addEventListener('click', () => {
        this.progress.setAttribute('value', index * 100 /(this.stepButtons.length - 1) );//there are 3 buttons. 2 spaces.

        this.stepButtons.forEach((item, secindex)=>{
            if(index > secindex){
                item.classList.add('done');
            }
            if(index < secindex){
                item.classList.remove('done');
            }
        })
    })
})

}
