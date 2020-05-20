import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pagina-general-pedido',
  templateUrl: './pagina-general-pedido.component.html',
  styleUrls: ['./pagina-general-pedido.component.css']
})
export class PaginaGeneralPedidoComponent implements OnInit {

  formularioPedido = new FormGroup({
    inputNombre: new FormControl(''),
    inputTelefono: new FormControl(''),
    inputDireccion: new FormControl(''),
    inputPedido: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
