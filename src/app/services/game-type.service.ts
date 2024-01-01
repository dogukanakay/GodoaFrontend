import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GameType } from '../models/game';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameTypeService {
  apiUrl = environment.apiUrl + 'gametype/';
  constructor(private httpClient: HttpClient) {}

  getGameTypes(): Observable<ListResponseModel<GameType>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<GameType>>(newPath);
  }

  addGameType(gameType: GameType): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, gameType);
  }

  deleteGameType(gameType: GameType): Observable<ResponseModel> {
    let newPath = this.apiUrl + 'delete';
    return this.httpClient.post<ResponseModel>(newPath, gameType);
  }
}
