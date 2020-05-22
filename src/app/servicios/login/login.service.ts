import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServer = "http://localhost:3000";

  datosUsuario: any; // Save logged in user data
  isLoggedIn$ = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
    // this.isLoggedIn$.emit(localStorage.getItem('isLoggedIn')=="true")
   }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  inicioSesion(usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.apiServer + '/login', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  registrarUsuario(formulario): Observable<Usuario> {
    const cliente: Usuario = {
      nombres: formulario.inputNombres,
      apellidos: formulario.inputApellidos,
      direccion: formulario.inputDireccion,
      telefono: formulario.inputTelefono,
      correo: formulario.inputEmail,
      contrasenia: formulario.inputPassword,
      tipoUsuario: "Cliente",
      estado: "Activo",      
    }
    return this.httpClient.post<Usuario>(this.apiServer + '/registar', JSON.stringify(cliente), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('usuario');
    this.isLoggedIn$.emit(false);
    this.router.navigate(['/login']);
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
