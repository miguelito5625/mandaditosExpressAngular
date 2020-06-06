import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { AuthguardGuard } from './guards/authguard.guard';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { GenerarPedidoClienteComponent } from './paginas/cliente/generar-pedido-cliente/generar-pedido-cliente.component';
import { LoginClienteComponent } from './paginas/cliente/login-cliente/login-cliente.component';
import { RegistrarClienteComponent } from './paginas/cliente/registrar-cliente/registrar-cliente.component';
import { PaginaPrincipalClienteComponent } from './paginas/cliente/pagina-principal-cliente/pagina-principal-cliente.component';
import { ListarPedidosClienteComponent } from './paginas/cliente/listar-pedidos-cliente/listar-pedidos-cliente.component';
import { PedidosClientePendientesComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-pendientes/pedidos-cliente-pendientes.component';
import { PedidosClienteEntregadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-entregados/pedidos-cliente-entregados.component';
import { PedidosClienteRevisadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-revisados/pedidos-cliente-revisados.component';
import { PedidosClienteAceptadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-aceptados/pedidos-cliente-aceptados.component';
import { PedidosClienteRechazadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-rechazados/pedidos-cliente-rechazados.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { LoginRepartidorComponent } from './paginas/repartidor/login-repartidor/login-repartidor.component';
import { RegistrarRepartidorComponent } from './paginas/repartidor/registrar-repartidor/registrar-repartidor.component';
import { RepartidorComponent } from './paginas/repartidor/repartidor.component';
import { GuardRepartidorGuard } from './guards/repartidor/guard-repartidor.guard';
import { PaginaPrincipalRepartidorComponent } from './paginas/repartidor/pagina-principal-repartidor/pagina-principal-repartidor.component';
import { PedidosRepartidorPendientesComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-pendientes/pedidos-repartidor-pendientes.component';
import { PedidosRepartidorEntregadosComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-entregados/pedidos-repartidor-entregados.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { PaginaPrincipalAdminComponent } from './paginas/admin/pagina-principal-admin/pagina-principal-admin.component';
import { LoginAdminComponent } from './paginas/admin/login-admin/login-admin.component';
import { RegistrarAdminComponent } from './paginas/admin/registrar-admin/registrar-admin.component';
import { GuardAdminGuard } from './guards/admin/guard-admin.guard';
import { PedidosAdminPendientesComponent } from './paginas/admin/listar-pedidos-admin/pedidos-admin-pendientes/pedidos-admin-pendientes.component';
import { PedidosAdminEntregadosComponent } from './paginas/admin/listar-pedidos-admin/pedidos-admin-entregados/pedidos-admin-entregados.component';
import { PedidosRepartidorEncaminoComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-encamino/pedidos-repartidor-encamino.component';
import { PedidosRepartidorRechazadosComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-rechazados/pedidos-repartidor-rechazados.component';
import { PedidosClienteEncaminoComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-encamino/pedidos-cliente-encamino.component';
import { MenuPedidosAdminComponent } from './paginas/admin/menu-pedidos-admin/menu-pedidos-admin.component';
import { MenuUsuariosAdminComponent } from './paginas/admin/menu-usuarios-admin/menu-usuarios-admin.component';
import { MenuRepartidoresAdminComponent } from './paginas/admin/menu-repartidores-admin/menu-repartidores-admin.component';
import { CrearRepartidorAdminComponent } from './paginas/admin/menu-repartidores-admin/crear-repartidor-admin/crear-repartidor-admin.component';
import { MostrarRepartidoresAdminComponent } from './paginas/admin/menu-repartidores-admin/mostrar-repartidores-admin/mostrar-repartidores-admin.component';


const routes: Routes = [
  { path: '',   
  redirectTo: '/cliente', 
  pathMatch: 'full' 
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path: '',
        component: PaginaPrincipalClienteComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'generar-pedido',
        component: GenerarPedidoClienteComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos',
        component: ListarPedidosClienteComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/pendientes',
        component: PedidosClientePendientesComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/revisados',
        component: PedidosClienteRevisadosComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/aceptados',
        component: PedidosClienteAceptadosComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/encamino',
        component: PedidosClienteEncaminoComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/entregados',
        component: PedidosClienteEntregadosComponent,
        // canActivate: [AuthguardGuard]
      },
      {
        path: 'consultar-pedidos/rechazados',
        component: PedidosClienteRechazadosComponent,
        // canActivate: [AuthguardGuard]
      }
    ]
  },
  {
    path: 'repartidor',
    component: RepartidorComponent,
    canActivate: [GuardRepartidorGuard],
    children: [
      {
        path: '',
        component: PaginaPrincipalRepartidorComponent
      },
      {
        path: 'consultar-pedidos/pendientes',
        component: PedidosRepartidorPendientesComponent
      },
      {
        path: 'consultar-pedidos/encamino',
        component: PedidosRepartidorEncaminoComponent
      },
      {
        path: 'consultar-pedidos/entregados',
        component: PedidosRepartidorEntregadosComponent
      },
      {
        path: 'consultar-pedidos/rechazados',
        component: PedidosRepartidorRechazadosComponent
      }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [GuardAdminGuard],
    children: [ 
      {
        path: '',
        component: PaginaPrincipalAdminComponent
      },
      {
        path: 'pedidos',
        component: MenuPedidosAdminComponent
      },
      {
        path: 'pedidos/pendientes',
        component: PedidosAdminPendientesComponent
      },
      {
        path: 'pedidos/entregados',
        component: PedidosAdminEntregadosComponent
      },
      {
        path: 'usuarios',
        component: MenuUsuariosAdminComponent
      },
      {
        path: 'usuarios/repartidores',
        component: MenuRepartidoresAdminComponent
      },
      {
        path: 'usuarios/repartidores/crear',
        component: CrearRepartidorAdminComponent
      },
      {
        path: 'usuarios/repartidores/mostrar',
        component: MostrarRepartidoresAdminComponent
      }
    ]
  },
  {
    path: 'cliente/login',
    component: LoginClienteComponent
  },
  {
    path:'cliente/registro',
    component: RegistrarClienteComponent
  },
  {
    path: 'repartidor/login',
    component: LoginRepartidorComponent
  },
  // {
  //   path:'repartidor/registro',
  //   component: RegistrarRepartidorComponent
  // },
  {
    path: 'admin/login',
    component: LoginAdminComponent
  },
  // {
  //   path:'admin/registro',
  //   component: RegistrarAdminComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
