import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CustomerService } from '../customer.service';
import { CartService } from '../cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css'
})
export class SearchProductComponent implements OnInit {

  productName: any;
  categoryName:any;
  products:any;
  customerId:any;
  loginStatus:any;

  constructor(private route: ActivatedRoute,
    private productService:ProductService,
    private customerService : CustomerService,
    private cartService : CartService,
    private router : Router,
    private toastr : ToastrService
  ){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.productName = params['productName'];
      // this.categoryName = params['categoryName'];
      this.searchProductByName(this.productName);
      // this.searchProductByCategory(this.categoryName);
    });
  }

  searchProductByName(name: string){
    this.productService.getProductsByName(name).subscribe((data:any)=>{
      this.products = data; 
    })
  }
  async searchProductByCategory(category: string){
    await this.productService.getProductsByCategory(category).then((data:any)=>{
      this.products = data; 
    })
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
          { timeOut:1000, progressBar : true, progressAnimation : 'increasing'
        });
      });
    }else{
      this.router.navigate(['login']);
    }
  }
}
