import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  customer:any;
  custLoggedSatus: boolean = false;
  adminLoggedStatus:boolean = false;
  customerId:any;

  constructor(private service : CustomerService,
    private toastr: ToastrService, 
    private router: Router,
    private adminService : AdminService  
  ){}

  async loginSubmit(loginForm:any){

    if(loginForm.emailId == '' || loginForm.password == ''){
      this.toastr.error("Invalid Credentials", 'Login Status', { timeOut:2000, progressBar: true, progressAnimation:'increasing'});
    }
    else{
      localStorage.setItem('emailId',loginForm.emailId);
      if(loginForm.emailId == 'admin' && loginForm.password == 'admin'){
        this.adminService.adminLogin();
        this.adminLoggedStatus = this.adminService.getAdminLogInStatus();
        console.log("Admin : "+ this.adminLoggedStatus);
        localStorage.setItem('adminLogin', 'this.adminLoggedStatus');
        this.router.navigate(['']);
      }else{
        await this.service.customerLogin(loginForm.emailId, loginForm.password).then((data:any) =>{
          this.customer = data;
          if(this.customer != null){
            this.customerId = data.cId
            localStorage.setItem('customerId', this.customerId);
            console.log("CustomerIdd : "+ this.customerId);
          }
          console.log("Cutomer : "+ this.customerId);
        });
        
        if(this.customer != null){
          
          this.toastr.success(
            "Login Successfully", 
            'Login Status', 
            { timeOut:1000, progressBar : true, progressAnimation : 'increasing'
          });
          this.service.isCustomerLoggedIn();
          console.log("Service Logged In: "+ this.service.getCustomerLoginStatus());
          this.router.navigate(['']);
        }
        else{
          this.toastr.error(
            "Invalid Credentials", 
            'Login Status', 
            { timeOut:1000, progressBar: true, progressAnimation:'increasing'});
        }
      }
    }
    
  }
}

