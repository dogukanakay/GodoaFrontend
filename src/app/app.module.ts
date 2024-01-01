import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductAddComponent } from './components/product/product-add/product-add.component';

import { NaviComponent } from './components/navi/navi.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { GameDetailsComponent } from './components/game/game-details/game-details.component';
import { GameAddComponent } from './components/game/game-add/game-add.component';
import { GameCategoryComponent } from './components/game/game-category/game-category.component';
import { GameEnvironmentsComponent } from './components/game/game-environments/game-environments.component';
import { PlatformComponent } from './components/game/platform/platform.component';
import { GameTypeComponent } from './components/game/game-type/game-type.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    NaviComponent,
    LoginComponent,
    RegisterComponent,
    GameDetailsComponent,
    GameAddComponent,
    GameCategoryComponent,
    GameEnvironmentsComponent,
    PlatformComponent,
    GameTypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi : true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
