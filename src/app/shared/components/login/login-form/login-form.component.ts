import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm !: FormGroup;

  constructor(private _auth : AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = new FormGroup({
      loginemail : new FormControl(null,Validators.required),
      loginpassword : new FormControl(null,Validators.required)
    })
  }

  onLoginForm(){
    if(this.loginForm.valid){
      let loginObj = {...this.loginForm.value, id : 1}
      this._auth.isLogin(loginObj);
    }
    else{
      alert("Enter Valid Creadentials!!!");
    }
  }

}
