import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { PaginaGeneralPedidoComponent } from './paginas/pagina-general-pedido/pagina-general-pedido.component';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';


const routes: Routes = [
  {
    path: '',
    component: PaginaPrincipalComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'generar-pedido',
    component: PaginaGeneralPedidoComponent,
    canActivate: [AuthguardGuard]
  },
  {
    path: 'login',
    component: FormularioLoginComponent
  },
  {
    path: 'sigup',
    component: FormularioRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
