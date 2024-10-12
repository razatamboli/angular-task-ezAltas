import { Component, OnInit } from '@angular/core';
import { SellerService } from '../seller.service';
import { Iseller } from 'src/app/shared/models/seller.interface';

@Component({
  selector: 'app-seller-cards',
  templateUrl: './seller-cards.component.html',
  styleUrls: ['./seller-cards.component.scss']
})
export class SellerCardsComponent implements OnInit {
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
