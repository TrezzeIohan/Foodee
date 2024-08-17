import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.sass'
})
export class FoodListComponent {
  constructor(private navigationService: NavigationService) {}

  goBack(){
    this.navigationService.goBackToParent();
  }

}
