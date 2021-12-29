import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
  path:'menu', component:MenuComponent
}, {
  path:'home',component:HomeComponent
}, {
  path:'product/:id', component:ProductDetailComponent
}, {
  path:'cart', component:CartComponent
}, {
  path:'customer', component:CustomerInfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
