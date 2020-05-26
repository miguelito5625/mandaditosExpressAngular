import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/servicios/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
 ) { }


 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {

       return true;
    }
    // navigate to login page as user is not authenticated    
    this.router.navigate(['/admin/login']);
    return false;
 }

 public isLoggedIn(): boolean {
    let status = false;

    if (localStorage.getItem('isLoggedIn') == "true" && localStorage.getItem('tipoUsuario') == "Admin") {
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
