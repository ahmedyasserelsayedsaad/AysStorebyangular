import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareServicesService {

  constructor(private http:HttpClient) { }

 getallProducts(){
return this.http.get(environment.apiUrl +`products`)
 }
  
 getAllCat(){
  return this.http.get(environment.apiUrl + `products/categories`)
 }
 filterByCate(key:any){
  return this.http.get(environment.apiUrl + `products/category/`+key)
 }
 detalies(id:any){
  return this.http.get(`https://dummyjson.com/products/${id}`)
 }
 
}
