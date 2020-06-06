import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';
declare var Swal:any;

@Component({
  selector: 'app-crear-repartidor-admin',
  templateUrl: './crear-repartidor-admin.component.html',
  styleUrls: ['./crear-repartidor-admin.component.css']
})
export class CrearRepartidorAdminComponent implements OnInit {

  sigupForm = new FormGroup({
    inputNombres: new FormControl('Miguel Angel'),
    inputApellidos: new FormControl('Archila Garcia'),
    inputDireccion: new FormControl('Quirigua'),
    inputTelefono: new FormControl('55801894'),
    inputEmail: new FormControl('repartidor1@gmail.com'),
    inputPassword: new FormControl('123456')
  });

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {

    Swal.fire({
      title: 'Creando usuario',
      icon: 'info',
      html: 'Por favor, espere',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });

    this.loginService.registrarUsuario(this.sigupForm.value, 'Repartidor').subscribe(
      res => {
        console.log(res);

        if (res['status'] == "ok") {

          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            onClose:(toast) => {
              this.router.navigate(['/admin/usuarios/repartidores']);
            }
          });
          
          Toast.fire({
            icon: 'success',
            title: res['message']
          });

        }else{
          console.log('no se creo el usuario');
          Swal.fire({
            title: 'Error!',
            text: res['message'],
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      err => {
        console.log('no hay conexion hacia el servidor');
        
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo crear el usuario',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      }
    );
  }

}
