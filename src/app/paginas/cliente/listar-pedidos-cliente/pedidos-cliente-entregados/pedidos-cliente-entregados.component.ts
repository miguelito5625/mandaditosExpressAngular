import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

declare var $:any;
import * as moment from 'moment';
import 'moment/min/locales';

@Component({
  selector: 'app-pedidos-cliente-entregados',
  templateUrl: './pedidos-cliente-entregados.component.html',
  styleUrls: ['./pedidos-cliente-entregados.component.css']
})
export class PedidosClienteEntregadosComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'entregado').subscribe(
      res => {
        console.log(res);
        this.listaDePedidos = res;
      }
    )
  }

  abrirCollapse(idcollapse){
   $(`#pedido${idcollapse}`).collapse('toggle');
  }

  public formatearFecha(fecha){
    return moment(fecha).locale("es").fromNow();
  }

}
