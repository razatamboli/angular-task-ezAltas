import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginFormComponent } from './shared/components/login/login-form/login-form.component';
import { SellerComponent } from './shared/components/seller/seller.component';
import { BidderComponent } from './shared/components/bidder/bidder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SellerCardsComponent } from './shared/components/seller/seller-cards/seller-cards.component';
import { SellerFormComponent } from './shared/components/seller/seller-form/seller-form.component';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
    SellerComponent,
    SellerFormComponent,
    SellerCardsComponent,
    BidderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
