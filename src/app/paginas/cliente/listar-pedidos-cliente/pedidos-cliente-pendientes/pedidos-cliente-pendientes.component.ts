import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

declare var $:any;
declare var Swal:any;
import * as moment from 'moment';
import 'moment/min/locales';

@Component({
  selector: 'app-pedidos-cliente-pendientes',
  templateUrl: './pedidos-cliente-pendientes.component.html',
  styleUrls: ['./pedidos-cliente-pendientes.component.css']
})
export class PedidosClientePendientesComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPRAEPorCliente(this.cliente.id).subscribe(
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

  aceptarPedido(pedido: any, estado_pedido){

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
      id_cliente: pedido.id_cliente
    }

    this.pedidoService.cambiarEstadoDelPedido(datos).subscribe(
      res => {
        console.log(res);

        if (res['status'] == 'ok') {
          Swal.fire({
            icon: 'success',
            title: 'Pedido aceptado',
            confirmButtonText: 'Cerrar'
          });
          this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'revisado').subscribe(
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
          this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'revisado').subscribe(
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
