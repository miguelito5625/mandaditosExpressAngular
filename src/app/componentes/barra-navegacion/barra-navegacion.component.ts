import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

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
    this.loginService.cerrarSesion();
  }

}
