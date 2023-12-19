import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from './local-storage.service';
import { Subject } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { Login, NewPassword, Register } from '../models/auth';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl+"auth/"
  constructor(private httpClient:HttpClient, private localStorageService:LocalStorageService) { }
  private loggedIn:boolean = false;
  isLoggedInChanged = new Subject<boolean>();


  login(loginModel:Login){
    let newPath = this.apiUrl + 'login'
    return this.httpClient.post<SingleResponseModel<Token>>(newPath,loginModel)
  }
  loggedin(){
    this.loggedIn = true;
    this.isLoggedInChanged.next(true);
  }
  logout(){
    this.localStorageService.removeItem('token')
    this.localStorageService.removeItem('user')
    this.loggedIn = false;
    this.isLoggedInChanged.next(false);
  }
  isLoggedin(){
    return this.loggedIn
  }


  register(registerModel:Register){
    let newPath = this.apiUrl + 'register'
    return this.httpClient.post<SingleResponseModel<Token>>(newPath,registerModel)
  }

  isAuthenticated(){
    let newPath = this.apiUrl+'isauthenticated'
    return this.httpClient.get<ResponseModel>(newPath)

  }

  updatePassword(newPassword:NewPassword){
    let newPath = this.apiUrl+'updatepassword'
    return this.httpClient.post<ResponseModel>(newPath, newPassword)
  }
}
