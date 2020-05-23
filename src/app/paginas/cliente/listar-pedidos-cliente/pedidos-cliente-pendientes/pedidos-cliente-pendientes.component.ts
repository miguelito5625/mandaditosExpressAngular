import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

declare var $:any;

@Component({
  selector: 'app-pedidos-cliente-pendientes',
  templateUrl: './pedidos-cliente-pendientes.component.html',
  styleUrls: ['./pedidos-cliente-pendientes.component.css']
})
export class PedidosClientePendientesComponent implements OnInit {

  cliente: Usuario;
  listaDePedidosPendientes: any;
  texto: string = "esto \n otro \n esto".replace(/\n/g, "<br>");

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    this.pedidoService.listarPedidosPorClienteYEstado(this.cliente.id, 'pendiente').subscribe(
      res => {
        console.log(res);
        this.listaDePedidosPendientes = res;
      }
    )
  }

  abrirCollapse(idcollapse){
    // $("#collapse2").collapse("hide");
   
  //  $(`#pedido${idcollapse}`).collapse("show");
   $(`#pedido${idcollapse}`).collapse('toggle');

    
  }

}
