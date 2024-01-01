import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GameType } from 'src/app/models/game';
import { GameTypeService } from 'src/app/services/game-type.service';



@Component({
  selector: 'app-game-type',
  templateUrl: './game-type.component.html',
  styleUrls: ['./game-type.component.css']
})
export class GameTypeComponent implements OnInit {

  gameTypeAddForm:FormGroup
  gameTypes:GameType[];

  constructor(
    private gameTypeService:GameTypeService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.createGameTypeAddForm();
    this.getGameTypes();
  }


  createGameTypeAddForm(){
    this.gameTypeAddForm = this.formBuilder.group({
      gameTypeName:["",Validators.required]
    })
  }

  getGameTypes(){
    this.gameTypeService.getGameTypes().subscribe({
      next: response=>{
        this.gameTypes = response.data;
      },
      error: responseError=>{
        this.toastrService.error(responseError.error.Message,"HATA")
      }
    })
  }

  addGameType(){
    if(this.gameTypeAddForm.valid){
      let platformPostModel = Object.assign({}, this.gameTypeAddForm.value)
      this.gameTypeService.addGameType(platformPostModel).subscribe({
        next: response=>{
          this.toastrService.success("Oyun Türü Eklendi")
          this.getGameTypes();
        },
        error: errorResponse=>{
          this.toastrService.error("Oyun Türü Eklenemedi")
        }
      })
    }
  }

  deleteGameType(gameType:GameType){
    this.gameTypeService.deleteGameType(gameType).subscribe({
      next:response=>{
        this.toastrService.success("Oyun Türü Silindi")
        this.getGameTypes();
      },
      error:errorResponse=>{
        this.toastrService.error("Oyun Türü Silinemez, Bu Oyun Türüne Bağlı Oyunlar Var")
      }
    })
  }
}






