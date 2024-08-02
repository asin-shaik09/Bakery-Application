import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

//For Modal Dialog Declaring jQuery Variable
declare var $: any;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  generatedOtp: any;
  otpSent:boolean=false;
  openResetPassword:boolean = false;
  customer : any;
  closeForgotForm:boolean = false;

  constructor(private service: CustomerService, private toastr : ToastrService, private router : Router ) {

    this.customer = {
      fullName: '',
      mobile:'',
      emailId: '',
      password:''
    }
  }


  forgotPassword(emailId:any){
    console.log(emailId);
    this.service.getCustomerByEmail(emailId).subscribe((data: any)=>{
      this.customer = data;
    });
    
    this.service.sendOtpToEmail(emailId).subscribe((data:any) =>{
      console.log(data);
      this.generatedOtp = data;
      this.otpSent = true;
      console.log("Otp Sent!!!..");
    });

  }

  otpSubmit(otp: any){
    if (this.generatedOtp == otp){
      this.closeForgotForm = true;
      this.openResetPassword = true;
    }

  }

  resetPassword(password:any){
    this.customer.password = password;
    this.service.updateCustomerPassword(this.customer).subscribe((data: any)=>{
      // console.log("After UpDate : "+data);
      // console.log("After UpDate : "+data.password);
    });

    this.toastr.success(
      "Password Reset Successfull", 
      "Password Reset Status", 
      { 
        timeOut:3000, 
        progressBar : true, 
        progressAnimation : 'increasing'
      });

    this.router.navigate(['login']);
  }


}
