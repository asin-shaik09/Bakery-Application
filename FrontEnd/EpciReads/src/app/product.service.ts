import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }

  getAllProducts(){
    return this.http.get('http://localhost:8090/getAllProducts');
  }

  getProductsByCategory(category: string){
    return this.http.get('http://localhost:8090/getProductsByCategory/'+category).toPromise();
  }

  getProductsByName(name: string){
    return this.http.get('http://localhost:8090/getProductsByName/'+name);
  }

  addProduct(products:any){
    return this.http.post('http://localhost:8090/addProduct', products);
  }
  
  updateProduct(product:any){
    return this.http.put('http://localhost:8090/updateProduct', product);
  }

  deleteProduct(pId:number){
    return this.http.delete('http://localhost:8090/deleteProductById/'+pId);
  }
}
