import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GameDetails } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css'],
})
export class GameDetailsComponent implements OnInit {
  gameDetails: GameDetails[];
  dataLoaded = false;
  constructor(
    private gameService: GameService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getGameDetails();
  }

  getGameDetails() {
    this.gameService.getGameDetails().subscribe({
      next: (response) => {
        this.gameDetails = response.data;
        this.dataLoaded = true;
      },
      error: (responseError) => {
        this.toastrService.error(responseError.error.Message,"HATA")
      },
    });
  }

  deleteGame(gameDetails:GameDetails){
    this.gameService.deleteGame(gameDetails).subscribe({
      next: response=>{
        this.toastrService.success("Oyun Silindi")
        this.getGameDetails();
      },
      error: responseError=>{
        this.toastrService.error("Bu oyunla ilgili ürünler olduğundan dolayı silinemez.")
      }
    })
  }
}
