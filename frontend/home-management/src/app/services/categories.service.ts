import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Categories';
import { Observable } from 'rxjs';
import { config } from "../config";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(config.serverBaseUrl + 'categories/all/')
  }

}
