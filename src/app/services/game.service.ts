import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { GameDetails, GamePost } from '../models/game';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl = environment.apiUrl+"game/"
  constructor(private httpClient:HttpClient) { }


  getGameDetails():Observable<ListResponseModel<GameDetails>>{
    let newPath = this.apiUrl+"getalldetails"
    return this.httpClient.get<ListResponseModel<GameDetails>>(newPath)
  }

  addGame(gamePost:GamePost):Observable<ResponseModel>{
    let newPath = this.apiUrl+"add"
    return this.httpClient.post<ResponseModel>(newPath,gamePost);
  }
  deleteGame(gameDetails:GameDetails):Observable<ResponseModel>{
    let newPath = this.apiUrl+"delete"
    return this.httpClient.post<ResponseModel>(newPath,gameDetails)
  }
}
