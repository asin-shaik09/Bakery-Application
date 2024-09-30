import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CustomerService } from './customer.service';


export const authGuard: CanActivateFn = (route, state) => {

  let service1 = inject(CustomerService);
  return service1.getCustomerLoginStatus();
};
