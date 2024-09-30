import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-showallcustomers',
  templateUrl: './showallcustomers.component.html',
  styleUrl: './showallcustomers.component.css'
})
export class ShowallcustomersComponent implements OnInit {

  customers:any;

  constructor(private adminService : AdminService ){}

  ngOnInit(): void {
      this.adminService.getAllCustomers().subscribe((data)=>{
        this.customers = data;
      })
  }
}
