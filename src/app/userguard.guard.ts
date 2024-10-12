import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate {
  private _router = inject(Router)

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userRoleArr = route.data['userRole'];
    console.log(userRoleArr);
    let loginUserRole = localStorage.getItem('userRole');
    if(userRoleArr.includes(loginUserRole)){
      return true
    }else{
      return this._router.navigate(['home']);
    }
  }
  
}
