import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { authGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ShowallcustomersComponent } from './showallcustomers/showallcustomers.component';
import { ShowcustomerbyidComponent } from './showcustomerbyid/showcustomerbyid.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { PaymentsComponent } from './payments/payments.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  {path:'forgotPassword',  component:ForgotPasswordComponent},
  {path:'products', component:ProductsComponent},
  {path:'categoryComponent', component:CategoriesComponent},
  {path:'search', component:SearchProductComponent},
  {path:'cart', component:ShoppingCartComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'', component:HomeComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'showallcustomers', component:ShowallcustomersComponent},
  {path:'showcustomerbyid', component:ShowcustomerbyidComponent},
  {path:'addproducts', component:AddproductComponent},
  {path:'showproducts', component:ShowproductsComponent},
  {path:'categoryComponent?category=Mobile', component:CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
