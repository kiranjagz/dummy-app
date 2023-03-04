import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Result } from './Result';
import { Product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Result> {
    const url = 'https://dummyjson.com/products/';
    return this.http.get<Result>(url);
  }

  saveProduct(data: any): Observable<Product> {

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    const url = 'https://dummyjson.com/products/add';
    return this.http.post(url, data, { headers : headers})
      .pipe(
        map((response: any) => {
          // transform the data here
          console.log('pipe is hit');
          console.log(response);

          const product: Product = {
            // assign the values from the response here
            id: response.id,
            title: response.title
          };
          return product;
        }),
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}


