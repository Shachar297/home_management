import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';
import { MenuComponent } from '../components/menu/menu.component';
import { ProductsComponent } from '../components/products/products.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { HeaderComponent } from '../components/header/header.component';
import { CategoryNameComponent } from '../components/category-name/category-name.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateItemComponent } from '../components/create-item/create-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutComponent,
    HomeComponent,
    MenuComponent,
    ProductsComponent,
    ProductCardComponent,
    CategoriesComponent,
    HeaderComponent,
    CategoryNameComponent,
    CreateItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
