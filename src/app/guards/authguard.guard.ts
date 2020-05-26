import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../servicios/login/login.service';

@Injectable({
   providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
   constructor(
      private router: Router,
      private loginService: LoginService
   ) { }


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.isLoggedIn()) {

         return true;
      }
      // navigate to login page as user is not authenticated    
      this.router.navigate(['/cliente/login']);
      return false;
   }

   public isLoggedIn(): boolean {
      let status = false;
      if (localStorage.getItem('isLoggedIn') == "true" && localStorage.getItem('tipoUsuario') == "Cliente") {
         this.loginService.isLoggedIn$.emit(true);
         status = true;
      }
      else {
         this.loginService.isLoggedIn$.emit(false);
         status = false;
      }
      return status;
   }

}
