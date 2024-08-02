import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ShowallcustomersComponent } from './showallcustomers/showallcustomers.component';
import { ShowcustomerbyidComponent } from './showcustomerbyid/showcustomerbyid.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    FooterComponent,
    ProductsComponent,
    CategoriesComponent,
    SearchProductComponent,
    ShoppingCartComponent,
    AboutusComponent,
    ContactUsComponent,
    HomeComponent,
    ShowallcustomersComponent,
    ShowcustomerbyidComponent,
    AddproductComponent,
    ShowproductsComponent,
    PlaceorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
    ToastrModule.forRoot(),    // ToastrModule added
    BrowserAnimationsModule,  // required animations module
    ReactiveFormsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
