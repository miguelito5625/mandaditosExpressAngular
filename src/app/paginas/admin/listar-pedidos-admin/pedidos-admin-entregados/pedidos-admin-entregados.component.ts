import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

declare var Swal: any;
declare var $: any;
import * as moment from 'moment';


@Component({
  selector: 'app-pedidos-admin-entregados',
  templateUrl: './pedidos-admin-entregados.component.html',
  styleUrls: ['./pedidos-admin-entregados.component.css']
})
export class PedidosAdminEntregadosComponent implements OnInit {

  inputRepartidor = new FormControl('', [Validators.required]);
  inputFechaDesde = new FormControl('', [Validators.required]);
  inputFechaHasta = new FormControl('', [Validators.required]);

  listaDePedidos: any;
  listaDeRepartidores: any;

  constructor(
    private pedidoService: PedidoService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.pedidoService.listarPedidosPorEstado('entregado').subscribe(
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


  filtrarPedidos() {

    if (!this.inputRepartidor.valid) {
      console.log('escoja un repartidor');
    }

    if (!this.inputFechaDesde.valid) {
      console.log('erorr fecha 1');
    }

    if (!this.inputFechaHasta.valid) {
      console.log('error fecha 2');
    }

    let datos = {
      id_repartidor: this.inputRepartidor.value,
      fechaDesde: this.inputFechaDesde.value,
      fechaHasta: this.inputFechaHasta.value
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

    this.pedidoService.filtrarPedidosEntregadosPorRepartidorYFechas(datos).subscribe(
      res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: false,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            $('#modalDatosFiltro').modal('hide');
          }
        });

        Toast.fire({
          icon: 'success',
          title: 'Datos filtrados'
        });
        console.log(res);
        this.listaDePedidos = res;
      },
      err => {
        console.log('ocurrio un error al filtrar');
        Swal.fire({
          title: 'Error!',
          text: 'Error en el servidor',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    )

  }



}
