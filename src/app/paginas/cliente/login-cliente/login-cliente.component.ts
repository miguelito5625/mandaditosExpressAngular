import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

declare var Swal: any;

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  loginForm = new FormGroup({
    userEmail: new FormControl('test1@gmail.com'),
    userPassword: new FormControl('123456')
  });

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {

    Swal.fire({
      title: 'Iniciando sesion',
      icon: 'info',
      html: 'Por favor, espere',
      timerProgressBar: true,
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });


    this.loginService.inicioSesion(this.loginForm.value).subscribe(
      (data) => {
        // console.log(data);
        if (data['status'] == 'ok') {
          console.log('iniciar sesion');
          this.loginService.isLoggedIn$.emit(true);
          const usuario: Usuario = {
            apellidos: data['usuario'].apellidos,
            correo: data['usuario'].correo,
            direccion: data['usuario'].direccion,
            nombres: data['usuario'].nombres,
            telefono: data['usuario'].telefono,
            tipoUsuario: data['usuario'].tipoUsuario,
            id: data['usuario'].id
          };

          const Toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            },
            onClose:(toast) => {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          localStorage.setItem('tipoUsuario', "Cliente");
          localStorage.setItem('isLoggedIn', "true");
          this.router.navigate(['/cliente']);
            }
          });
          
          Toast.fire({
            icon: 'success',
            title: 'Sesion iniciada'
          });

          
        } else {
          console.log('error al iniciar sesion');
          Swal.fire({
            title: 'Error!',
            text: 'No se pudo iniciar sesion',
            icon: 'error',
            confirmButtonText: 'Aceptar'
          });
        }
      },
      err => {
        console.log('no hay conexion hacia el servidor');
        
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo iniciar sesion',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      
      }
    );
  }
}
