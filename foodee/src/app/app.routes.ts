import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { MyCartComponent } from './my-cart/my-cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'food-page/:id', component: FoodPageComponent},
    { path: 'my-cart', component: MyCartComponent},
    { path: '**', redirectTo: '/main', pathMatch: 'full' }  // Rota para páginas não encontradas (opcional)
];
