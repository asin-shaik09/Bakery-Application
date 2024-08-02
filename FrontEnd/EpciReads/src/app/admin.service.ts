import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminLoginStatus :boolean; 

  constructor(private http : HttpClient) { 
    this.adminLoginStatus = false;
  }

  adminLogin(){
    this.adminLoginStatus = true; 
  }
  adminLogout(){
    this.adminLoginStatus = false;
  }
  getAdminLogInStatus(){
    return this.adminLoginStatus;
  }

  getAllCustomers(){
    return this.http.get('http://localhost:8090/getAllCustomer');
  }
  getCustomerById(cId:number){
    return this.http.get('http://localhost:8090/getCustomerById/'+cId);
  }

  getProducts(){
    return this.http.get('http://localhost:8090/getProducts');
  }
}
