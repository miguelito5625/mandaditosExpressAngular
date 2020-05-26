import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-barra-navegacion-repartidor',
  templateUrl: './barra-navegacion-repartidor.component.html',
  styleUrls: ['./barra-navegacion-repartidor.component.css']
})
export class BarraNavegacionRepartidorComponent implements OnInit {

  isLoggedIn: boolean = false;

  constructor(
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    // console.log('navegacion');
    
    this.loginService.isLoggedIn$.subscribe(
      res => {
        // console.log('sesion: ' + res);
        this.isLoggedIn = res;
      }
    );

    this.loginService.isLoggedIn$.emit(true);

  }

  cerrarSesion() {
    this.loginService.cerrarSesionRepartidor();
  }
}
