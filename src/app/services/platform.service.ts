import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Platform } from '../models/platform';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  apiUrl = environment.apiUrl + 'platform/';
  constructor(private httpClient: HttpClient) {}

  getPlatforms(): Observable<ListResponseModel<Platform>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Platform>>(newPath);
  }

  addPlatform(platform: Platform): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, platform);
  }

  deletePlatform(platform: Platform): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, platform);
  }
}
