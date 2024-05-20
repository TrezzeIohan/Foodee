import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FoodPageComponent } from './food-page/food-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'food-page/:id', component: FoodPageComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }  // Rota para páginas não encontradas (opcional)
];
