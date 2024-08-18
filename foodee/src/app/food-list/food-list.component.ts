import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { FoodCategory } from '../models/food-category/food-category.model';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.sass'
})
export class FoodListComponent {
  constructor(
    private navigationService: NavigationService,
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  goBack(){
    this.navigationService.goBackToParent();
  }

  categoryId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
  categories : FoodCategory[] = this.dataService.getCategoryList();

  selectedCategory = this.categories.find(category => category.id === this.categoryId);
}
