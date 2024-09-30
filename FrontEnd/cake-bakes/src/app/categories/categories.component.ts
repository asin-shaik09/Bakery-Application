import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { CustomerService } from '../customer.service';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {

  products:any;
  category:any;
  customerId:any;
  loginStatus:any;

  constructor(private productService: ProductService,
    private route: ActivatedRoute, 
    private customerService: CustomerService,
    private router: Router,
    private cartService: CartService,
    private toastr : ToastrService,
    public adminService: AdminService
    ){ }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.fetchProductsByCategory(this.category);
    });
  }

  async fetchProductsByCategory(category: string) {
    // Call ProductService to fetch products based on the category
    await this.productService.getProductsByCategory(category).then(products => {
      this.products = products;
    });
  }

 
  addToCart(product: any): void {
    this.customerId = localStorage.getItem('customerId');
    console.log("CustomerIDDD.. "+this.customerId);
    this.loginStatus = this.customerService.getCustomerLoginStatus();
    console.log("Login AStatus : "+this.loginStatus);
    
    if(this.loginStatus){
      const cartItem = {
        imgSrc:product.imgsrc,
        name: product.name,
        price: product.price,
        quantity: 1 // You can set the initial quantity here
      };
      this.cartService.addToCart(cartItem).subscribe(response => {
        // Handle success or error response from the server
        // console.log(response);
        this.toastr.success(
          "Product Added", 
          '', 
          { timeOut:1000, progressBar : true, progressAnimation : 'increasing'
        });
      });
    }else{
      this.router.navigate(['login']);
    }
  }
  fetchCatetory(category: any) {
    this.router.navigate(['categoryComponent'], { queryParams: { category: category } });
  }


}
