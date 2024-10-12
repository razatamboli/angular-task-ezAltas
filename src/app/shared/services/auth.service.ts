import { Injectable } from '@angular/core';
import { Iauthlogin } from '../models/authlogin.interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole !: string;
  userRoleLoginStatus : boolean = false;
  loginstatus : BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private _router : Router) { }

  isAutheticated(){
    return new Promise((resolve,reject) => {
      if(localStorage.getItem('userRole')){
        this.userRoleLoginStatus = true;
        this.loginstatus.next(true);
        resolve(this.userRoleLoginStatus)
      }
      else{
        this.userRoleLoginStatus = false;
        this.loginstatus.next(false);
        this._router.navigate(['']);
      }
    })
  }

  isLogin(loginObj : Iauthlogin){
    if(loginObj.loginemail == "seller@auction.com" && loginObj.loginpassword == "Seller@12341"){
      this.userRole = "seller";
      this.loginstatus.next(true);
      localStorage.setItem("token","Token stored Successfully!!!");
      localStorage.setItem("userRole","Seller");
      this._router.navigate(['/home']);
    }
    else if(loginObj.loginemail == "bidder@auction.com" && loginObj.loginpassword == "Bidder@12341"){
      this.userRole = "bidder";
      this.loginstatus.next(true);
      localStorage.setItem("token","Token stored Successfully!!!");
      localStorage.setItem("userRole","Bidder");
      this._router.navigate(['/home']);
    }
    else{
      alert("Enter Valid Creadentials!!!");
    }
  }
}
