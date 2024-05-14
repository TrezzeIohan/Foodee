import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']  // Corrigido de styleUrl para styleUrls
})
export class NavigationBarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private location: Location) { }

  ngOnInit() {
    this.currentRoute = this.location.path();
  }
  
}