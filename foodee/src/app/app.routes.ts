import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FoodPageComponent } from './food-page/food-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'food-page', component: FoodPageComponent},
];
