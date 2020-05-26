import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/servicios/login/login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.isLoggedIn$.emit(true);
    }

}
