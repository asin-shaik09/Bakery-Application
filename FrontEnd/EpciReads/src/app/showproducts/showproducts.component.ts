import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrl: './showproducts.component.css'
})
export class ShowproductsComponent implements OnInit {

  category:any;
  products:any;

  editproduct:any;

  constructor(private serviceProducts: ProductService,
    private toastr:ToastrService
  ){  
    this.editproduct={
      pId:'',
      name:'',
      author:'',
      imgsrc:'',
      description:'',
      category:'',
      quantity:'',
      price:''
    }
  }

  ngOnInit(): void {
    this.serviceProducts.getAllProducts().subscribe((data:any)=>{
      this.products = data;
    })
  }
  async getProductByCategory(category:any){
    console.log(category);
    this.products = null;
    await this.serviceProducts.getProductsByCategory(category).then((data:any)=>{
      this.products = data;
    })
  }
  editProduct(product:any){
    this.editproduct = product
    this.serviceProducts.updateProduct(this.editproduct).subscribe((data:any)=>{
      console.log(data); 
      this.toastr.success(
        "Edit Status",
        "Product Edited Successfully",
        { timeOut:1000, progressBar : true, progressAnimation : 'increasing'});     
    });
  }

  deleteProduct(pId:number){
    console.log(pId);
    this.serviceProducts.deleteProduct(pId).subscribe((data)=>{
      console.log(data);
    });

    const i = this.products.findIndex((element:any) =>{
      return pId = element.pId;
    })
    this.products.splice(i,1);
  }
}
