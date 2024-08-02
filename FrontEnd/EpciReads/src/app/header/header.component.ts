import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {

  // adminLogedIn:boolean;

  constructor(public service: CustomerService, 
    private router: Router, 
    public adminService : AdminService,
    private cartService: CartService
  ){ 
    // this.adminLogedIn = false;
  }

  ngOnInit(): void {
    // this.adminLogedIn = this.adminService.getAdminLogInStatus();
    // console.log("this.adminLogedIn : " + this.adminLogedIn);
  }


  // isCustomerLoggedOut(){
  //   this.service.isCustomerLoggedOut();
  // }

  fetchCatetory(category:any){
    this.router.navigate(['categoryComponent'], { queryParams: { category: category } });
  }

  search(product: any){
    this.router.navigate(['search'], { queryParams: { productName : product.name}})
  }
}
