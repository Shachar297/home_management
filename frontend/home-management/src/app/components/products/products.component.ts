import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    public stateService: StateService,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.apiService.getAllProducts();
  }

  public onAddItemBtn() {}

  public removeItem(event: any) {
    this.productsService.deleteProduct(event).subscribe(
      (removed) => {
        this.apiService.getAllProducts();
      },
      (err) => {
        alert(err);
      }
    );
  }
}
