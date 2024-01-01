import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Platform } from 'src/app/models/platform';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  platformAddForm:FormGroup
  platforms:Platform[];

  constructor(
    private platformService:PlatformService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
    this.createPlatformAddForm();
    this.getPlatforms();
  }


  createPlatformAddForm(){
    this.platformAddForm = this.formBuilder.group({
      platformName:["",Validators.required]
    })
  }

  getPlatforms(){
    this.platformService.getPlatforms().subscribe({
      next: response=>{
        this.platforms = response.data;
      },
      error: responseError=>{
        this.toastrService.error(responseError.error.Message,"HATA")
      }
    })
  }

  addPlatform(){
    if(this.platformAddForm.valid){
      let platformPostModel = Object.assign({}, this.platformAddForm.value)
      this.platformService.addPlatform(platformPostModel).subscribe({
        next: response=>{
          this.toastrService.success("Platform Eklendi")
          this.getPlatforms();
        },
        error: errorResponse=>{
          this.toastrService.error("Platform Eklenemedi")
        }
      })
    }
  }
  deletePlatform(platform:Platform){
    this.platformService.deletePlatform(platform).subscribe({
      next:response=>{
        this.toastrService.success("Platform Silindi")
        this.getPlatforms();
      },
      error:errorResponse=>{
        this.toastrService.error("Platform Silinemez, Bu Platforma Bağlı Oyunlar Var")
      }
    })
  }
}

