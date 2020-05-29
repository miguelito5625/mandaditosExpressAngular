import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var Swal:any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-repartidor-encamino',
  templateUrl: './pedidos-repartidor-encamino.component.html',
  styleUrls: ['./pedidos-repartidor-encamino.component.css']
})
export class PedidosRepartidorEncaminoComponent implements OnInit {

  repartidor: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.repartidor = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.repartidor);
    
    this.pedidoService.listarPedidosPorRepartidorYEstado(this.repartidor.id, 'en camino').subscribe(
      res => {
        console.log(res);
        this.listaDePedidos = res;
      }
    );    
  }

  abrirCollapse(idcollapse){
    $(`#pedido${idcollapse}`).collapse('toggle');
   }
 
   public formatearFecha(fecha){
     return moment(fecha).locale("es").fromNow();
   }

   entregarPedido(pedido: any, estado_pedido){

    Swal.fire({
      title: 'Procesando',
      icon: 'info',
      html: 'Por favor, espere',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });

    const datos: any = {
      estado_pedido,
      id_pedido: pedido.id_pedido,
    }

    this.pedidoService.cambiarEstadoDelPedido(datos).subscribe(
      res => {
        console.log(res);

        if (res['status'] == 'ok') {
          Swal.fire({
            icon: 'success',
            title: 'Pedido entregado',
            confirmButtonText: 'Cerrar'
          });
          this.pedidoService.listarPedidosPorRepartidorYEstado(this.repartidor.id, 'aceptado').subscribe(
            res => {
              console.log(res);
              this.listaDePedidos = res;
            }
          ); 

        }else{
          console.log('ocurrio un error al aceptar el pedido');
          Swal.fire({
            icon: 'error',
            title: 'Error al procesar el pedido',
            confirmButtonText: 'Cerrar'
          });
        }

      },
      err => {
        console.log('ocurrio un error al aceptar el pedido');
        Swal.fire({
          icon: 'error',
          title: 'Error al procesar el pedido',
          confirmButtonText: 'Cerrar'
        });
      }
    )
    
  }

  async rechazarPedido(pedido: any) {

    const estado_pedido = 'rechazado';

    const { value: descripcion_rechazo } = await Swal.fire({
      title: 'Razon del rechazo',
      input: 'textarea',
      inputPlaceholder: 'Escriba porque se rechazo el pedido',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve()
          } else {
            resolve('Escriba la razon por la cual se rechazo el pedido')
          }
        });
      }
    })

    if (!descripcion_rechazo) {
      return;
    }

    Swal.fire({
      title: 'Procesando',
      icon: 'info',
      html: 'Por favor, espere',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });

    const datos: any = {
      id_pedido: pedido.id_pedido,
      estado_pedido,
      descripcion_rechazo
    }

    this.pedidoService.rechazarPedido(datos).subscribe(
      res => {

        console.log(res);

        if (res['status'] == 'ok') {
          Swal.fire({
            icon: 'success',
            title: 'Pedido rechazado',
            confirmButtonText: 'Cerrar'
          });
          this.pedidoService.listarPedidosPorRepartidorYEstado(this.repartidor.id, 'aceptado').subscribe(
            res => {
              console.log(res);
              this.listaDePedidos = res;
            }
          ); 
        } else {
          console.log('ocurrio un error al rechazar el pedido');
          Swal.fire({
            icon: 'error',
            title: 'Error al procesar el pedido',
            confirmButtonText: 'Cerrar'
          });
        }


      },
      err => {
        console.log('ocurrio un error al rechazar el pedido');
        Swal.fire({
          icon: 'error',
          title: 'Error al procesar el pedido',
          confirmButtonText: 'Cerrar'
        });
      }
    )

  }

}
