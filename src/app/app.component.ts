import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-task-ezAltas';
  isNavbarVisible : boolean = false;
  
  constructor(private _auth : AuthService) {
    
  }

  ngOnInit(): void {
    this.navbarStatus();
  }

  navbarStatus(){
    this._auth.loginstatus.subscribe(res => this.isNavbarVisible = res);
    console.log(this.isNavbarVisible);
  }
}
