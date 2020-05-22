import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {
  sigupForm = new FormGroup({
    inputNombres: new FormControl('Miguel Angel'),
    inputApellidos: new FormControl('Archila Garcia'),
    inputDireccion: new FormControl('Quirigua'),
    inputTelefono: new FormControl('55801894'),
    inputEmail: new FormControl('test1@gmail.com'),
    inputPassword: new FormControl('123456')
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.registrarUsuario(this.sigupForm.value).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
