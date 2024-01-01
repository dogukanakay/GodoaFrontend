import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GameCategory } from 'src/app/models/game';
import { GameCategoryService } from 'src/app/services/game-category.service';

@Component({
  selector: 'app-game-category',
  templateUrl: './game-category.component.html',
  styleUrls: ['./game-category.component.css'],
})
export class GameCategoryComponent implements OnInit {

  categoryAddForm:FormGroup
  gameCategories:GameCategory[];

  constructor(
    private gameCategoryService: GameCategoryService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.createCategoryAddForm();
    this.getCategories();
  }


  createCategoryAddForm(){
    this.categoryAddForm = this.formBuilder.group({
      gameCategoryName:["",Validators.required]
    })
  }

  getCategories(){
    this.gameCategoryService.getGameCategories().subscribe({
      next: response=>{
        this.gameCategories = response.data;
      },
      error: responseError=>{
        this.toastrService.error(responseError.error.Message,"HATA")
      }
    })
  }

  addCategory(){
    if(this.categoryAddForm.valid){
      let categoryPostModel = Object.assign({}, this.categoryAddForm.value)
      this.gameCategoryService.addGameCategory(categoryPostModel).subscribe({
        next: response=>{
          this.toastrService.success("Oyun Kategorisi Eklendi")
          this.getCategories()
        },
        error: errorResponse=>{
          this.toastrService.error("Kategori Eklenemedi")
        }
      })
    }
  }

  deleteCategory(category:GameCategory){
    this.gameCategoryService.deleteGameCategory(category).subscribe({
      next:response=>{
        this.toastrService.success("Kategori Silindi")
        this.getCategories();
      },
      error:errorResponse=>{
        this.toastrService.error("Kategori Silinemez, Bu Kategoriye Bağlı Oyunlar Var")
      }
    })
  }
}
