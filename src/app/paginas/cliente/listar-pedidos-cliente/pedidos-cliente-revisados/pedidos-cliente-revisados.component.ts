import { Component, OnInit } from '@angular/core';

declare var $:any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-cliente-revisados',
  templateUrl: './pedidos-cliente-revisados.component.html',
  styleUrls: ['./pedidos-cliente-revisados.component.css']
})
export class PedidosClienteRevisadosComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'revisado').subscribe(
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

  cambiarEstadoDelPedido(pedido: any, estado_pedido){

    const datos: any = {
      estado_pedido,
      id_pedido: pedido.id_pedido,
      id_cliente: pedido.id_cliente
    }

    this.pedidoService.cmabiarEstadoDelPedido(datos).subscribe(
      res => {
        console.log(res);
        this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'revisado').subscribe(
          res => {
            console.log(res);
            this.listaDePedidos = res;
          }
        );  
      }
    )
    
  }

}
