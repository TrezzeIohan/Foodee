import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bootstrap-custom-stepper',
  standalone: true,
  imports: [],
  templateUrl: './bootstrap-custom-stepper.component.html',
  styleUrls: ['./bootstrap-custom-stepper.component.sass']
})
export class BootstrapCustomStepperComponent implements AfterViewInit {

  private lastExpandedButton: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.checkStepButtons();

    const stepButtons = this.el.nativeElement.querySelectorAll('.step-button');
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
  }
}