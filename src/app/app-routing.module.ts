import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductDetailsComponent},
  {path:"product/add",component:ProductAddComponent},




  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
