import { Injectable, OnInit } from "@angular/core";
import { Iseller, SellerStatus } from "../../models/seller.interface";


@Injectable({
    providedIn : 'root'
})
export class SellerService implements OnInit{
    sellerArr : Array<Iseller> = [
    {
      "id": "1",
      "itemName": "Vintage Clock",
      "description": "A beautiful vintage clock from 1950s.",
      "startingBid": 100,
      "currentBid": 0,
      "status": SellerStatus.active, // can be "active", "finalized", "canceled"
      "endTime": "2024-10-12"
    },
    {
        "id": "2",
        "itemName": "Nike Jordan Shoes",
        "description": "Limited edition shoes as they only 13 in all over world",
        "startingBid": 180,
        "currentBid": 0,
        "status": SellerStatus.finalized, // can be "active", "finalized", "canceled"
        "endTime": "2024-10-12"
    },
    {
        "id": "3",
        "itemName": "Rolex Watch Limited Edition",
        "description": "Limited edition Rolex Watch",
        "startingBid": 1050,
        "currentBid": 0,
        "status": SellerStatus.cancelled, // can be "active", "finalized", "canceled"
        "endTime": "2024-10-12"
    },
    {
        "id": "4",
        "itemName": "Ruby Diamond",
        "description": "Red Diamond - Hand crafted Ruby Red Diamond",
        "startingBid": 11550,
        "currentBid": 0,
        "status": SellerStatus.active, // can be "active", "finalized", "canceled"
        "endTime": "2024-10-12"
    },
    {
        "id": "4",
        "itemName": "Ruby Diamond",
        "description": "Red Diamond - Hand crafted Ruby Red Diamond",
        "startingBid": 11550,
        "currentBid": 0,
        "status": SellerStatus.active, // can be "active", "finalized", "canceled"
        "endTime": "2024-10-12"
    },
{
        "id": "4",
        "itemName": "Ruby Diamond",
        "description": "Red Diamond - Hand crafted Ruby Red Diamond",
        "startingBid": 11550,
        "currentBid": 0,
        "status": SellerStatus.active, // can be "active", "finalized", "canceled"
        "endTime": "2024-10-12"
    }]

    constructor() { }

    ngOnInit(): void {
        
    }

    fetchSellerArr(){
        return this.sellerArr;
    }

}