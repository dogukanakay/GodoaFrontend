import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { GameDetails } from '../models/game';

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
}
