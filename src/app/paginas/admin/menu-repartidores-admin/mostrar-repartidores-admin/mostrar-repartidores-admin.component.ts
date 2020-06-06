import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

declare var $:any;

@Component({
  selector: 'app-mostrar-repartidores-admin',
  templateUrl: './mostrar-repartidores-admin.component.html',
  styleUrls: ['./mostrar-repartidores-admin.component.css']
})
export class MostrarRepartidoresAdminComponent implements OnInit {

  listaDeRepartidores: any;


  formularioRepartidorModal = new FormGroup({
    inputNombres: new FormControl(''),
    inputApellidos: new FormControl(''),
    inputDireccion: new FormControl(''),
    inputTelefono: new FormControl(''),
    inputEmail: new FormControl(''),
    // inputPassword: new FormControl('')
  });

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {

    // $('#modalModificarRepartidor').modal('show');

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

  onSubmit(){
    console.log('hola');
    $('#modalModificarRepartidor').modal('hide');
  }

  abrirModal(repartidor){
    this.formularioRepartidorModal.controls.inputApellidos.setValue(repartidor.apellidos);
    this.formularioRepartidorModal.controls.inputDireccion.setValue(repartidor.direccion);
    this.formularioRepartidorModal.controls.inputEmail.setValue(repartidor.correo);
    this.formularioRepartidorModal.controls.inputNombres.setValue(repartidor.nombres);
    this.formularioRepartidorModal.controls.inputTelefono.setValue(repartidor.telefono);
    $('#modalModificarRepartidor').modal('show');
  }

}
