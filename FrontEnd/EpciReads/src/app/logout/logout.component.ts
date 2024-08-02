import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(private service : CustomerService, private router:Router, private toastr: ToastrService,
    private adminService: AdminService
  ){
    
    this.service.isCustomerLoggedOut();   // Status false
    this.adminService.adminLogout();
    this.toastr.warning(
      "Logged Out", 
      'Login Status', 
      { timeOut: 4000, progressBar:true, progressAnimation:'increasing'
    });
    localStorage.removeItem('emailId');
    localStorage.removeItem('customerId');
    localStorage.clear();

    this.router.navigate(['login']);
  }

}
