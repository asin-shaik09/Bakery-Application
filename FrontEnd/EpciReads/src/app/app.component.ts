import { Component } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Store_UI';
  constructor(public adminService : AdminService,){
    localStorage.removeItem('customerId');
    localStorage.removeItem('emailId');
    localStorage.clear();
  }
}
