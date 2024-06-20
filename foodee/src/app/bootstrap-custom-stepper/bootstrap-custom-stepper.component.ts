import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { OrderComponent } from './order/order.component';

@Component({
  selector: 'app-bootstrap-custom-stepper',
  standalone: true,
  imports: [OrderComponent],
  templateUrl: './bootstrap-custom-stepper.component.html',
  styleUrls: ['./bootstrap-custom-stepper.component.sass']
})
export class BootstrapCustomStepperComponent implements AfterViewInit {

  private lastExpandedButton: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.checkStepButtons();

    const stepButtons = this.el.nativeElement.querySelectorAll('.step-button');
    const stepTitles = this.el.nativeElement.querySelectorAll('.step-title');

    stepButtons.forEach((button: HTMLElement) => {
      this.renderer.listen(button, 'click', () => {
        setTimeout(() => this.checkStepButtons(), 300); // Adjust timeout to match your collapse animation duration
      });
    });
  }

  private checkStepButtons(): void {
    const stepButtons = this.el.nativeElement.querySelectorAll('.step-button');
    let anyExpanded = false;

    stepButtons.forEach((button: HTMLElement) => {
      if (button.getAttribute('aria-expanded') === 'true') {
        anyExpanded = true;
        this.lastExpandedButton = button;
        this.renderer.addClass(button, 'no-interaction');
      } else {
        this.renderer.removeClass(button, 'no-interaction');
      }
    });

    if (!anyExpanded && this.lastExpandedButton) {
      this.lastExpandedButton.setAttribute('aria-expanded', 'true');
      this.lastExpandedButton.classList.remove('collapsed');
      this.renderer.addClass(this.lastExpandedButton, 'no-interaction');
      const collapseTarget = document.querySelector(this.lastExpandedButton.getAttribute('data-bs-target')!);
      if (collapseTarget) {
        collapseTarget.classList.add('show');
      }
    }

    this.updateStepperClasses();
  }

  private updateStepperClasses(): void {
    const stepButtons = this.el.nativeElement.querySelectorAll('.step-button');
    const stepTexts = this.el.nativeElement.querySelectorAll('.steps-text');
    const progress1 = this.el.nativeElement.querySelector('#progress1');
    const progress2 = this.el.nativeElement.querySelector('#progress2');
    const firstButtonExpanded = stepButtons[0].getAttribute('aria-expanded') === 'true';
    const secondButtonExpanded = stepButtons[1].getAttribute('aria-expanded') === 'true';
    const thirdButtonExpanded = stepButtons[2].getAttribute('aria-expanded') === 'true';

    if (firstButtonExpanded) {
      this.renderer.removeClass(stepButtons[1], 'bg-color-light-coral-important');
      this.renderer.removeClass(stepButtons[2], 'bg-color-light-coral-important');

      this.renderer.removeClass(progress1, 'bg-color-light-coral');
      this.renderer.removeClass(progress2, 'bg-color-light-coral');
    }

    if (secondButtonExpanded) {
      this.renderer.removeClass(progress1, 'bg-color-tea-rose');
      this.renderer.addClass(progress1, 'bg-color-light-coral');

      this.renderer.addClass(stepButtons[1], 'bg-color-light-coral-important')

      this.renderer.removeClass(stepTexts[1], 'steps-text-light')

      
    } else {
      this.renderer.removeClass(progress1, 'bg-color-light-coral');
      this.renderer.addClass(progress1, 'bg-color-tea-rose');
      this.renderer.addClass(progress2, 'bg-color-tea-rose');

      this.renderer.addClass(stepTexts[1], 'steps-text-light')

    }

    if (thirdButtonExpanded) {
      this.renderer.addClass(stepButtons[1], 'bg-color-light-coral-important');
      this.renderer.addClass(stepButtons[2], 'bg-color-light-coral-important');

      this.renderer.removeClass(progress1, 'bg-color-tea-rose');
      this.renderer.removeClass(progress2, 'bg-color-tea-rose');
      this.renderer.addClass(progress1, 'bg-color-light-coral');
      this.renderer.addClass(progress2, 'bg-color-light-coral');

      this.renderer.removeClass(stepTexts[1], 'steps-text-light')
      this.renderer.removeClass(stepTexts[2], 'steps-text-light')


    } else {
      this.renderer.removeClass(progress2, 'bg-color-light-coral');
      this.renderer.addClass(progress2, 'bg-color-tea-rose');

      this.renderer.removeClass(stepButtons[2], 'bg-color-light-coral-important')

      this.renderer.addClass(stepTexts[2], 'steps-text-light')
    }


  }

}