import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Pedido } from 'src/app/interfaces/pedido/pedido';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { PedidoService } from 'src/app/servicios/pedido/pedido.service';
import { Router } from '@angular/router';

declare var Swal: any;

@Component({
  selector: 'app-generar-pedido-cliente',
  templateUrl: './generar-pedido-cliente.component.html',
  styleUrls: ['./generar-pedido-cliente.component.css']
})
export class GenerarPedidoClienteComponent implements OnInit {

  cliente: Usuario;

  formularioPedido = new FormGroup({
    inputNombre: new FormControl(''),
    inputTelefono: new FormControl(''),
    inputDireccion: new FormControl(''),
    inputPedido: new FormControl('lo que pide')
  });

  constructor(
    private pedidoService: PedidoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cliente = JSON.parse(localStorage.getItem('usuario'));
    console.log(this.cliente);
    this.formularioPedido.controls.inputNombre.setValue(this.cliente.nombres + " " + this.cliente.apellidos);
    this.formularioPedido.controls.inputTelefono.setValue(this.cliente.telefono);
    this.formularioPedido.controls.inputDireccion.setValue(this.cliente.direccion);
  }

  onSubmit() {
    // console.log(this.formularioPedido.value);

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

    const pedido: Pedido = {
      id_cliente: this.cliente.id,
      nombre_cliente: this.formularioPedido.controls.inputNombre.value,
      telefono: this.formularioPedido.controls.inputTelefono.value,
      direccion: this.formularioPedido.controls.inputDireccion.value,
      pedido: this.formularioPedido.controls.inputPedido.value,
      id_repartidor: null,
      estado: "pendiente",
    };

    this.pedidoService.guardarPedido(pedido).subscribe(
      res => {

        console.log(res);

        if (res['status'] == 'ok') {
          Swal.fire({
            icon: 'success',
            title: 'Pedido realizado',
            confirmButtonText: 'Cerrar',
            allowOutsideClick: false,
            onClose: (toast) => {

              this.router.navigate(['/cliente/consultar-pedidos']);

            }
          });


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
    );

  }

}
