import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  customer : any;
  siteKey: string;
  captchaVerified: boolean = false;
  protected aFormGroup!: FormGroup;

  constructor(private service : CustomerService, private toastr: ToastrService, private router: Router, private formBuilder: FormBuilder){
    this.siteKey = '6Lfs8KMpAAAAAKjFeLgvOSSNc9_qX0LcE1cg8sgc';
    this.customer = {
      fullName:'',
      mobile:'',
      emailId:'',
      password:'',
    }
  }
  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }
  handleSuccess(event: any) {
    this.captchaVerified = true; 
  }

  custRegister(regForm : any){

    if (!this.captchaVerified) {
      // Display an error message or any indication that CAPTCHA verification is required
      this.toastr.error("Please complete CAPTCHA verification", 'CAPTCHA Verification', { timeOut: 2000 });
      return;
    }

    this.customer.fullName = regForm.fullName;
    this.customer.mobile = regForm.mobile;
    this.customer.emailId = regForm.emailId;
    this.customer.password = regForm.password;
    
    this.service.registerCustomer(this.customer).subscribe((data:any) => { console.log(data); })

    this.toastr.success(
      "Registration Successfull", 
      'Register Status', 
      { timeOut:3000, progressBar:true, progressAnimation:'increasing'
    });
    this.router.navigate(['login']);
  }

}

