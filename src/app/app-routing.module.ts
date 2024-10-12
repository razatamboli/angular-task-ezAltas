import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { SellerComponent } from './shared/components/seller/seller.component';
import { BidderComponent } from './shared/components/bidder/bidder.component';
import { LoginFormComponent } from './shared/components/login/login-form/login-form.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AuthGuardGuard } from './shared/services/auth-guard.guard';
import { UserguardGuard } from './userguard.guard';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent 
  },
  {
    path : "home",
    component : HomeComponent
  },
  {
    path : "seller",
    component : SellerComponent,
    canActivate : [AuthGuardGuard, UserguardGuard],
    data : {
      userRole : ["seller"]
    }
    // loadChildren : import('./shared/components/seller/seller.module').then(res => res.SellerModule)
  },
  {
    path : 'bidder',
    component : BidderComponent,
    canActivate : [AuthGuardGuard, UserguardGuard],
    data : {
      userRole : ["sidder"]
    }
    // loadChildren : import('./shared/components/bidder/bidder.component').then(res => res.BidderComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
