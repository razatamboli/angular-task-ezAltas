import { Component, OnInit } from '@angular/core';
import { Iseller } from 'src/app/shared/models/seller.interface';
import { SellerService } from '../seller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-form',
  templateUrl: './seller-form.component.html',
  styleUrls: ['./seller-form.component.scss']
})
export class SellerFormComponent implements OnInit {
  sellerArr !: Array<Iseller>;
  sellerForm !: FormGroup;

  constructor(private _seller : SellerService) { }

  ngOnInit(): void {
    this.createSellerForm();
  }

  createSellerForm(){
    this.sellerForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      description : new FormControl(null,Validators.required),
      startingbid : new FormControl(null,Validators.required),
      status : new FormControl(null,Validators.required)
    })
  }

  onSellerForm(){
    console.log(this.sellerForm.value);
    
  }

}
