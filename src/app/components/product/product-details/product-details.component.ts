import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private toastrService:ToastrService,
    private route:Router
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

  deleteProduct(productDetails:ProductDetails){
    if(productDetails.stockQuantity>0){
      this.toastrService.info("Bu ilanla ilgili ürünler bulunduğundan dolayı silinemez. Görünürlüğünü kaldırmak istiyorsanız pasif yapabilirsiniz","Silinemez")
      
    }else{

    
    this.productService.deleteProduct(productDetails).subscribe({
      next: (response) =>{
        this.toastrService.info(response.message,"Başarılı")
        this.getProductsDetails();
      },
      error: (errorResponse)=>{
        this.toastrService.error(errorResponse.error.Message,"HATA")
      }
    })
   }
  }

  updateStatus(productDetails:ProductDetails){
    if(productDetails.status == false && productDetails.stockQuantity==0){
      this.toastrService.error("Bu ürün stokta bulunmadığı için aktif hale getirilemez.","Güncelleme Yapılamaz");
    }else{

    
    this.productService.updateStatus(productDetails).subscribe({
      next: (reponse) =>{
        this.toastrService.success(reponse.message,"Başarılı")
        this.getProductsDetails();
      },
      error: (responserError) =>{
        this.toastrService.error("Güncelleme yapılamadı","Hata")
      }
    })
  }
}
}
