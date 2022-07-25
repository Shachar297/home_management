import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {config} from "../config"
import { Product } from '../models/Product';
import { NewProduct } from '../models/NewProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(config.serverBaseUrl);
  }

  public createNewProduct(newProductDetails: NewProduct): Observable<any> {
      return this.http.post<any>(config.serverBaseUrl, newProductDetails)
  }

  public deleteProduct(productId: number): Observable<any> { 
    return this.http.delete<any>(config.serverBaseUrl + productId)
  }
}
