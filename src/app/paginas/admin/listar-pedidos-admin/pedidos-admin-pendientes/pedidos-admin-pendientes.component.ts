import { Component, OnInit } from '@angular/core';

declare var $: any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

declare var Swal: any;

@Component({
  selector: 'app-pedidos-admin-pendientes',
  templateUrl: './pedidos-admin-pendientes.component.html',
  styleUrls: ['./pedidos-admin-pendientes.component.css']
})
export class PedidosAdminPendientesComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;
  listaDeRepartidores: any;

  constructor(
    private pedidoService: PedidoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorEstado('pendiente').subscribe(
      res => {
        console.log(res);
        this.listaDePedidos = res;
      },
      err => {
        console.log('error al cargar los pedidos');
        
      }
    );
    this.usuarioService.listarRepartidores().subscribe(
      res => {
        console.log(res);
        this.listaDeRepartidores = res;
      },
      err => {
        console.log('error al cargar los repartidores');
        
      }
    );
  }

  abrirCollapse(idcollapse) {
    $(`#pedido${idcollapse}`).collapse('toggle');
  }

  public formatearFecha(fecha) {
    return moment(fecha).locale("es").fromNow();
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
          this.pedidoService.listarPedidosPorEstado('pendiente').subscribe(
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

  async revisarPedido(pedido) {

    let options = {};


    await this.listaDeRepartidores.map(
      repartidor => {
        options[repartidor.id] = repartidor.nombre;
      }
    );

    const { value: valores } = await Swal.mixin({
      // input: 'text',
      confirmButtonText: 'Siguiente <i class="fas fa-arrow-circle-right fa-lg"></i>',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4']
    }).queue([
      {
        title: 'Verifique la direccion de destino',
        input: 'text',
        inputValue: pedido.direccion_cliente,
      },
      {
        title: 'Verifique el pedido',
        input: 'textarea',
        inputValue: pedido.pedido
      },
      {
        title: 'Asignar precio al pedido',
        input: 'number',
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve()
            } else {
              resolve('Asigne un precio')
            }
          });
        }
      },
      {
        title: 'Seleccione un repartidor',
        input: 'select',
        confirmButtonText: 'Guardar <i class="fas fa-save fa-lg"></i>',
        inputOptions: options,
        inputPlaceholder: 'Repartidores',
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value) {
              resolve()
            } else {
              resolve('Asigne un repartidor al pedido')
            }
          });
        }
      }
    ]);

    if (!valores) {
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

    let datos = {
      id_pedido: pedido.id_pedido,
      direccion: valores[0],
      pedido: valores[1],
      precio: parseFloat(valores[2]).toFixed(2),
      id_repartidor: valores[3],
      estado: 'revisado'
    }

    // console.log(datos);

    this.pedidoService.revisarPedido(datos).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Pedido revisado',
          confirmButtonText: 'Cerrar'
        });
        this.pedidoService.listarPedidosPorEstado('pendiente').subscribe(
          res => {
            console.log(res);
            this.listaDePedidos = res;
          }
        );
      },
      err => {
        console.log('ocurrio un error al revisar el pedido');
        Swal.fire({
          icon: 'error',
          title: 'Error al procesar el pedido',
          confirmButtonText: 'Cerrar'
        });
      }
    );

  }

}
