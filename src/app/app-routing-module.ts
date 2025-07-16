import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { FoodPage } from './food-page/food-page';
import { CartPage } from './cart-page/cart-page';

const routes: Routes = [
  {path:'', component:Home},
  {path:'search/:searchTerm', component:Home},
  {path:'tag/:tag1',component:Home},
  {path:'food/:id', component:FoodPage},
  {path:'cart-page',component:CartPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
