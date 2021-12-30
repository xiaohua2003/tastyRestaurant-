import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items:Product[]=[]

  constructor(private http:HttpClient) { }
  addCart(value:Product){
this.items.push(value)
  }
  getItems(){
    return this.items
  }
  clearItems(){
    return this.items=[]
  }
  removeOne(value:Product){
   return this.items=this.items.filter(item=>item!==value)
  }
  getProducts(){
    return this.http.get('./assets/product.json').pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
  return throwError(()=>{return error.message})
  }
}
