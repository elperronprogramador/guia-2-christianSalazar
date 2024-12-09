import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5129/api/products';

  constructor(private http: HttpClient) {}

  
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.apiUrl);
  }
}
