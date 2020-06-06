import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido/pedido';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  
  private apiServer = environment.backendServer;


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
    return this.httpClient.post<Pedido>(this.apiServer + '/pedido', JSON.stringify(pedido), this.httpOptions)
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

  listarPedidosPRAEPorCliente(id_cliente): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.apiServer + '/cliente/pedidos/prae/' + id_cliente)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  listarPedidosPorRepartidorYEstado(id_repartidor, estado): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.apiServer + '/repartidor/' + id_repartidor + '/pedidos/' + estado)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  
  listarPedidosPorEstado(estado): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.apiServer + '/pedidos/' + estado)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cambiarEstadoDelPedido(pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(this.apiServer + '/pedido/cambiar-estado', JSON.stringify(pedido), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  rechazarPedido(pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(this.apiServer + '/pedido/rechazar', JSON.stringify(pedido), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  revisarPedido(datos): Observable<any> {
    return this.httpClient.put<any>(this.apiServer + '/pedido/revisar', JSON.stringify(datos), this.httpOptions)
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
