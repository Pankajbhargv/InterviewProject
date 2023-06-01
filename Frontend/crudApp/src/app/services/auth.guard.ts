import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

//auth guard will help our page to get accessed securly
export class AuthGuard implements CanActivate { //ye method tab activate krega jab iske wala function true return krega

  constructor(private loginService : LoginService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const previousUrl = state.url.split('#')[0];
      const currentUrl = window.location.href.split('#')[0];
  
      if (previousUrl.includes(currentUrl)) {
        this.router.navigate([route.url[0].path]);
        return false;
      }
  
      if(this.loginService.isLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['login']);
          return false;
      }
      
     
  }
  
}
