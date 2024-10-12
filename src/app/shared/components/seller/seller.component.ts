import { Component, OnInit } from '@angular/core';
import { Iseller } from '../../models/seller.interface';
import { SellerService } from './seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
  sellerArr !: Array<Iseller>;

  constructor(private _seller : SellerService) { }

  ngOnInit(): void {
    this.sellerArr = this._seller.fetchSellerArr();
  }






  onIncreamentBid(sellerObj : Iseller){
    console.log(sellerObj);
    sellerObj.startingBid += 10;
    console.log(sellerObj);
    
  }

  onDecreamentBid(sellerObj : Iseller){
    console.log(sellerObj);
    sellerObj.startingBid -= 10;
    console.log(sellerObj);
    
  }

}