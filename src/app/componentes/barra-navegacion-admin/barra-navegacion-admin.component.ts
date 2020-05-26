import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-barra-navegacion-admin',
  templateUrl: './barra-navegacion-admin.component.html',
  styleUrls: ['./barra-navegacion-admin.component.css']
})
export class BarraNavegacionAdminComponent implements OnInit {

  // isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    // console.log('navegacion');
    
    // this.loginService.isLoggedIn$.subscribe(
    //   res => {
    //     // console.log('sesion: ' + res);
    //     this.isLoggedIn = res;
    //   }
    // );

    // this.loginService.isLoggedIn$.emit(true);

  }

  cerrarSesion() {
    this.loginService.cerrarSesionAdmin();
  }

}
