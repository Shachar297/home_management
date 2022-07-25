import { Injectable } from '@angular/core';
import { NewProduct } from '../models/NewProduct';
import { CategoriesService } from './categories.service';
import { ProductsService } from './products.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    public productService: ProductsService,
    public stateService: StateService,
    public categoryService: CategoriesService
  ) {}

  public getAllProducts(): any {
    this.productService.getAllProducts().subscribe(
      (products) => {
        this.stateService.products = products;
        console.log(this.stateService.products);
      },
      (err) => {
        alert(err);
        console.error(err)
      }
    );
  }

  public getAllCategories(): any {
    this.categoryService.getAllCategories().subscribe(
      (categories) => {
        this.stateService.categories = categories;
      },
      (err) => {
        alert(err);
        console.error(err)
      }
    );
  }


}
