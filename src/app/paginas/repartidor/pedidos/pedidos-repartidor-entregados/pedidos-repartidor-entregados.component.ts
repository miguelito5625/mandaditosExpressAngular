import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var Swal:any;
import * as moment from 'moment';
import 'moment/min/locales';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-repartidor-entregados',
  templateUrl: './pedidos-repartidor-entregados.component.html',
  styleUrls: ['./pedidos-repartidor-entregados.component.css']
})
export class PedidosRepartidorEntregadosComponent implements OnInit {

  repartidor: Usuario;
  listaDePedidos: any;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.repartidor = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.repartidor);
    
    this.pedidoService.listarPedidosPorRepartidorYEstado(this.repartidor.id, 'entregado').subscribe(
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
