import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GameDetails } from 'src/app/models/game';
import { ProductCategory } from 'src/app/models/product';
import { GameService } from 'src/app/services/game.service';
import { ProductCategoryService } from 'src/app/services/product-category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm:FormGroup;
  productCategories:ProductCategory[];
  gameDetails:GameDetails[];
 
  constructor(
    private productService:ProductService,
    private productCategoryService:ProductCategoryService,
    private gameService:GameService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.getProductCategories();
    this.getGameDetails();
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      productCategoryId: ['',Validators.required],
      gameId:['',Validators.required],
      productName: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  getProductCategories(){
    this.productCategoryService.getProductCategories().subscribe({
      next: (response) =>{
        this.productCategories = response.data;
      }
    })
  }
  getGameDetails(){
    this.gameService.getGameDetails().subscribe({
      next: (response)=>{
        this.gameDetails = response.data
      }
    })
  }

  addProduct(){
    if(this.productAddForm.valid){
      let productPostModel = Object.assign({}, this.productAddForm.value);
      this.productService.addProduct(productPostModel).subscribe({
        next: (response) =>{
          this.toastrService.success(response.message,"Ürün Eklendi");
        },
        error: (responseError) => {
          this.toastrService.error(responseError.error.message,'Hata')
        }
      })
    }else{
      this.toastrService.error("Product Eklenemedi","HATA")
    }
  }

}
