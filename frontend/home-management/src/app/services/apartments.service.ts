import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {config} from "../config"
import { Product } from '../models/Product';
@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {

  constructor(public http: HttpClient) { }

  public registerNewApartment(apartment: any): Observable<any> {
    if(!apartment){
      apartment = {
        street : "arazim",
        apartmentNumber: "6",
        apartmentName: "shachar"

      }
    }
    return this.http.post(config.serverBaseUrl, apartment)
  }
}
