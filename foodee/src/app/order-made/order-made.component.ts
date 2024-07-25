import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-made',
  standalone: true,
  imports: [],
  templateUrl: './order-made.component.html',
  styleUrl: './order-made.component.sass'
})
export class OrderMadeComponent {

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animateImageAndRedirect();
    }, 10000); // 6000 milliseconds = 6 seconds
  }


animateImageAndRedirect() {
  const imgElement = document.querySelector('.img-fluid') as HTMLElement;
  if (imgElement) {
    imgElement.classList.add('animate-up');
  }
  setTimeout(() => {
    this.router.navigate(['/home']);
  }, 3000); // time for the animation to be smoto
}
}
