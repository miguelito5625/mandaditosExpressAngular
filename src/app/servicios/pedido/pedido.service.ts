import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  
  private apiServer = "http://localhost:3000";


  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  guardarPedido(pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.apiServer + '/cliente/pedido', JSON.stringify(pedido), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  listarPedidosPorClienteYEstado(id_cliente, estado): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.apiServer + '/cliente/' + id_cliente + '/pedidos/' + estado)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cmabiarEstadoDelPedido(pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.apiServer + '/cliente/pedido/cambiar-estado', JSON.stringify(pedido), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
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
