import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductDetails } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productsDetails:ProductDetails[];
  dataLoaded = false;

  
  constructor(
    private productService:ProductService,
    private toastrService:ToastrService
    ) {}

  ngOnInit(): void {
    this.getProductsDetails();
  }

  getProductsDetails(){
    this.productService.getProductDetails().subscribe({
      next: (response) =>{
        this.productsDetails = response.data;
        this.dataLoaded = true;
      },
      error: (responseError) =>{
        this.toastrService.error(responseError.error.Message,"HATA")
      }
    })
  }

}
