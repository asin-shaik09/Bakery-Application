import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var paypal: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, AfterViewInit {
  showSuccessMessage: boolean = false; // State to control the display of the success message
  

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const paypalScriptLoaded = new Promise((resolve) => {
      if (typeof paypal !== 'undefined') {
        resolve(true);
      } else {
        const interval = setInterval(() => {
          if (typeof paypal !== 'undefined') {
            clearInterval(interval);
            resolve(true);
          }
        }, 50);
      }
    });

    paypalScriptLoaded.then(() => {
      paypal.Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '100' // Replace with the actual amount
              }
            }]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            this.showSuccessMessage = true; // Show the success message
            // Optionally, handle the transaction details here
          });
        }
      }).render('#paypal-button-container');
    });
  }
}
