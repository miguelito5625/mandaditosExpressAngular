import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  sigupForm = new FormGroup({
    userEmail: new FormControl('test1@gmail.com'),
    userPassword: new FormControl('123456')
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    let email = this.sigupForm.controls.userEmail.value;
    let password = this.sigupForm.controls.userPassword.value;

    // this.loginService.SignUp(email, password);

  }

}
