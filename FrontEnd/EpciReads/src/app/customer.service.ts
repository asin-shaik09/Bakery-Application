import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  loginStatus: boolean;

  constructor(private http: HttpClient) { this.loginStatus = false; }


  registerCustomer(customer: any){
    return this.http.post('http://localhost:8090/registerCustomer', customer);
  }

  customerLogin(emailId:any, password:any){
    return this.http.get('http://localhost:8090/customerLogin/'+ emailId + '/' + password).toPromise();
  }

  getCustomerByEmail(emailId: any){
    return this.http.get('http://localhost:8090/getCustomerByEmail/'+ emailId);
  }

  sendOtpToEmail(emailId: any){
    return this.http.get('http://localhost:8090/sendOtpToEmail/'+ emailId);
  }

  updateCustomerPassword(customer: any){
    return this.http.put('http://localhost:8090/updateCustomerPassword', customer);
  }
  isCustomerLoggedIn(){
    this.loginStatus = true;
  }
  isCustomerLoggedOut(){
    this.loginStatus = false;
  }
  getCustomerLoginStatus(){
    return this.loginStatus;
  }
}
