import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ProductsService } from 'src/app/services/products.service';
import { StateService } from 'src/app/services/state.service';
import {NewProduct} from "../../models/NewProduct"
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  public newProduct = new NewProduct("", 1,1);
  constructor(public stateService : StateService, public productService : ProductsService, public apiService : ApiService) { }

  ngOnInit(): void {
  }

  public onCreateButtonClick(): void {
    console.log(this.newProduct)
    this.productService.createNewProduct(this.newProduct).subscribe(
      (newProductSuccess) => {
        this.stateService.isCreatingNewItem = false;
        this.apiService.getAllProducts();
        this.stateService.newProductId = newProductSuccess.insertId;



      },
      (err) => {
        alert(err);
      }
    )
    setTimeout(() => {
      this.stateService.newProductId = 0;
    }, 5000)
  }

}
