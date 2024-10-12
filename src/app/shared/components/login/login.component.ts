import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  sellerEmail : string = "seller@auction.com";
  sellerPass : string = "Seller@12341";

  bidderEmail : string = "bidder@auction.com";
  bidderPass : string = "Bidder@12341";

  constructor() { }

  ngOnInit(): void {
  }

}
