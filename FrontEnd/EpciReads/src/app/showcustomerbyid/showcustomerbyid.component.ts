import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showcustomerbyid',
  templateUrl: './showcustomerbyid.component.html',
  styleUrl: './showcustomerbyid.component.css'
})
export class ShowcustomerbyidComponent {

  customer:any;
  cId:number;
  constructor(private adminService : AdminService){
    this.cId = 0;
    this.customer = null;
  }

  getCustomer() {
    console.log(this.cId);
    this.adminService.getCustomerById(this.cId).subscribe((data)=>{
      this.customer = data;
    })
  }
}
