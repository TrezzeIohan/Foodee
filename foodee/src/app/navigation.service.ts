import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.history.push(event.urlAfterRedirects);
    });
  }

  getHistory(): string[] {
    return this.history;
  }

  getLastUrl(): string {
    if (this.history.length > 1) {
      return this.history[this.history.length - 2];
    } else {
      return '/'; // Default to home or some other default route
    }
  }

  navigateBack(): void {
    const lastUrl = this.getLastUrl();
    this.router.navigateByUrl(lastUrl);
  }
}
