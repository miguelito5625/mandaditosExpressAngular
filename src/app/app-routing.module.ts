import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { PaginaGeneralPedidoComponent } from './paginas/pagina-general-pedido/pagina-general-pedido.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { GenerarPedidoClienteComponent } from './paginas/cliente/generar-pedido-cliente/generar-pedido-cliente.component';
import { LoginClienteComponent } from './paginas/cliente/login-cliente/login-cliente.component';
import { RegistrarClienteComponent } from './paginas/cliente/registrar-cliente/registrar-cliente.component';


const routes: Routes = [
  {
    path: '',
    component: GenerarPedidoClienteComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    component: LoginClienteComponent
  },
  {
    path:'registro',
    component: RegistrarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
