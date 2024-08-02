import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {

  products:any;

  constructor(private adminService : AdminService,
    private serviceProduct: ProductService,
     private toastr:ToastrService, 
     private router: Router){
    this.products={
      // pId:0,
      category:'',
      description:'',
      imgsrc:'',
      name:'',
      author:'',
      price:'',
      quantity:0,
    }
  }

  addProduct(product : any){
    // this.products.pId = product.pId;
    this.products.category = product.category,
    this.products.description = product.description,
    this.products.imgsrc = product.imgsrc,
    this.products.name = product.name,
    this.products.author=product.author,
    this.products.price = product.price,
    this.products.quantity = product.quantity

    console.log(this.products)
    this.serviceProduct.addProduct(this.products).subscribe((data:any)=>{
      console.log(data);
      if(data != null){
        this.toastr.success(
          "", 
          'Product Added', 
          { timeOut:3000, progressBar : true, progressAnimation : 'increasing'
        });
      }
    });
    this.router.navigate(['addproduct'])
  }
}
