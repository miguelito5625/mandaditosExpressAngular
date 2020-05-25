import { Component, OnInit } from '@angular/core';

declare var $:any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-cliente-aceptados',
  templateUrl: './pedidos-cliente-aceptados.component.html',
  styleUrls: ['./pedidos-cliente-aceptados.component.css']
})
export class PedidosClienteAceptadosComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'aceptado').subscribe(
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
