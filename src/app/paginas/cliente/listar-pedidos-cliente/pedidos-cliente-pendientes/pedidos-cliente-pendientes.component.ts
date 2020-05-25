import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

declare var $:any;
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
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'pendiente').subscribe(
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

}
