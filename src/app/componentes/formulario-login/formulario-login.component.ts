import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {

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
    // console.log(this.loginForm.value);
    let email = this.loginForm.controls.userEmail.value;
    let password = this.loginForm.controls.userPassword.value;

    // this.loginService.SignIn(email, password);

    // this.loginService.loginEmailAndPassword(this.loginForm.value).subscribe(
    //   (data) => {
    //     console.log(data['message']);
    //     if (data['message']=="login ok") {
    //       localStorage.setItem('isLoggedIn', 'true')
    //       this.router.navigate(['/']); 
    //     }
    //   }
    // );
  }

}
