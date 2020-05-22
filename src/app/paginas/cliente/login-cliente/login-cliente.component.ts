import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario/usuario';

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
    // console.log(localStorage.getItem('isLoggedIn'));
    
    // const usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));

    // console.log(usuario);
    
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    // let email = this.loginForm.controls.userEmail.value;
    // let password = this.loginForm.controls.userPassword.value;


    this.loginService.inicioSesion(this.loginForm.value).subscribe(
      (data) => {
        // console.log(data);
        if (data['status']=='ok') {
          console.log('iniciar sesion');
          const usuario: Usuario = {
            apellidos: data['cliente'].apellidos,
            correo:  data['cliente'].correo,
            direccion:  data['cliente'].direccion,
            nombres:  data['cliente'].nombres,
            telefono:  data['cliente'].telefono,
            tipoUsuario:  data['cliente'].tipoUsuario,
            id:  data['cliente'].id
          };
          // console.log(usuario);
          localStorage.setItem('usuario', JSON.stringify(usuario));
          localStorage.setItem('isLoggedIn', "true");
          this.router.navigate(['/']);
        }else{
          console.log('error al iniciar sesion');
        }
      }
    );
  }
}
