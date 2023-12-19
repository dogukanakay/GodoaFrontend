import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductCategory } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  apiUrl = environment.apiUrl+"productcategory/"
  constructor(private httpClient : HttpClient) { }


  getProductCategories():Observable<ListResponseModel<ProductCategory>>{
    let newPath = this.apiUrl+"getall";
    return this.httpClient.get<ListResponseModel<ProductCategory>>(newPath);
  }

  addProductCategory(productCategory:ProductCategory):Observable<ResponseModel>{
    let newPath = this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,productCategory)
  }
}
