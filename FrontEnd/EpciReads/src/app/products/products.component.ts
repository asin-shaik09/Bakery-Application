import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Router, mapToCanActivate } from '@angular/router';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: any;
  customerId: any;
  loginStatus: any;

  constructor(private serviceProducts: ProductService,
    private cartService: CartService,
    private router: Router,
    private customerService: CustomerService,
    private toastr: ToastrService,
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.products = null;
    this.serviceProducts.getAllProducts().subscribe((data: any) => {
      this.products = data;
    });
  }


  addToCart(product: any): void {
    this.customerId = localStorage.getItem('customerId');
    console.log("CustomerIDDD.. " + this.customerId);
    this.loginStatus = this.customerService.getCustomerLoginStatus();
    console.log("Login AStatus : " + this.loginStatus);

    if (this.loginStatus) {
      const cartItem = {
        imgSrc: product.imgsrc,
        name: product.name,
        author:product.author,
        price: product.price,
        quantity: 1 // You can set the initial quantity here
      };
      this.cartService.addToCart(cartItem).subscribe(response => {
        // Handle success or error response from the server
        // console.log(response);
        this.toastr.success(
          "Product Added",
          '',
          {
            timeOut: 1000, progressBar: true, progressAnimation: 'increasing'
          });
      });
    } else {
      this.router.navigate(['login']);
    }

  }
  fetchCatetory(category: any) {
    this.router.navigate(['categoryComponent'], { queryParams: { category: category } });
  }

}
