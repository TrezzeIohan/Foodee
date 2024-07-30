import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.history.push(event.urlAfterRedirects);
    });
  }

  getHistory(): string[] {
    return this.history;
  }

  goBack(): void {
    this.history.pop();
    if (this.history.length > 0) {
      this.router.navigate([this.history[this.history.length - 1]]);
    } else {
      this.router.navigate(['/']); // or some default route
    }
  }

  goBackToParent(): void {
    this.history.pop();
    while (this.history.length > 0 && this.isNestedRoute(this.history[this.history.length - 1])) {
      this.history.pop();
    }
    if (this.history.length > 0) {
      this.router.navigate([this.history[this.history.length - 1]]);
    } else {
      this.router.navigate(['/']); // or some default route
    }
  }

  private isNestedRoute(url: string): boolean {
    // Define your logic to determine if the route is nested
    return url.includes('nested');
  }
}
