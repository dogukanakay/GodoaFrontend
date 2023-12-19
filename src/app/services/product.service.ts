import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductDetails, ProductPost } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = environment.apiUrl + "product/"
  constructor(private httpClient:HttpClient) { }

  getProductDetails():Observable<ListResponseModel<ProductDetails>>{
    let newPath = this.apiUrl+"getalldetails"
    return this.httpClient.get<ListResponseModel<ProductDetails>>(newPath);
  }

  addProduct(productPost:ProductPost):Observable<ResponseModel>{
    let newPath = this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,productPost);
  }

  deleteProduct(productDetails:ProductDetails):Observable<ResponseModel>{
    let newPath = this.apiUrl+"delete"
    return this.httpClient.post<ResponseModel>(newPath,productDetails);
  }

  updateStatus(productDetails:ProductDetails):Observable<ResponseModel>{
    let newPath = this.apiUrl+"updatestatus"
    return this.httpClient.post<ResponseModel>(newPath,productDetails)
  }

}
