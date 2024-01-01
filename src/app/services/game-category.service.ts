import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { GameCategory } from '../models/game';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryService {
  apiUrl = environment.apiUrl + 'gamecategory/';
  constructor(private httpClient: HttpClient) {}

  getGameCategories(): Observable<ListResponseModel<GameCategory>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<GameCategory>>(newPath);
  }

  addGameCategory(gameCategory: GameCategory): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, gameCategory);
  }

  deleteGameCategory(gameCategory: GameCategory): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, gameCategory);
  }
}
