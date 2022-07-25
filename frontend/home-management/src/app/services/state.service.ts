import { Injectable } from '@angular/core';
import { Category } from '../models/Categories';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public publicComponents : string[] = ["רשימת קניות", "רשימת תיקונים", "חשבונות", "פרטי בעל דירה", "חוזה", ""];

  public products : Product[] = [];
  public categories : Category[] = [];

  public isCreatingNewItem : boolean = false;

  public newProductId : number= 0;
  constructor() { }
}
