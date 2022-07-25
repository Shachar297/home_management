import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../components/categories/categories.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
  {path : "", component : HomeComponent},
  {path: "products", component : ProductsComponent},
  {path: "category", component : CategoriesComponent},
  {path: "", redirectTo : 'products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
