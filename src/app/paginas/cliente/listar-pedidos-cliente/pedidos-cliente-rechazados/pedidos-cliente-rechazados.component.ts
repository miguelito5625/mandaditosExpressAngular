import { Component, OnInit } from '@angular/core';

declare var $:any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-cliente-rechazados',
  templateUrl: './pedidos-cliente-rechazados.component.html',
  styleUrls: ['./pedidos-cliente-rechazados.component.css']
})
export class PedidosClienteRechazadosComponent implements OnInit {

  cliente: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'rechazado').subscribe(
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
