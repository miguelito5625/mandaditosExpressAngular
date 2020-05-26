import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioLoginComponent } from './componentes/formulario-login/formulario-login.component';
import { PaginaPrincipalComponent } from './paginas/pagina-principal/pagina-principal.component';
import { BarraNavegacionComponent } from './componentes/barra-navegacion/barra-navegacion.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormularioRegistroComponent } from './componentes/formulario-registro/formulario-registro.component';
import { RegistrarClienteComponent } from './paginas/cliente/registrar-cliente/registrar-cliente.component';
import { LoginClienteComponent } from './paginas/cliente/login-cliente/login-cliente.component';
import { GenerarPedidoClienteComponent } from './paginas/cliente/generar-pedido-cliente/generar-pedido-cliente.component';

import { DetallePedidoRepartidorComponent } from './paginas/repartidor/detalle-pedido-repartidor/detalle-pedido-repartidor.component';
import { RegistrarRepartidorComponent } from './paginas/repartidor/registrar-repartidor/registrar-repartidor.component';
import { LoginRepartidorComponent } from './paginas/repartidor/login-repartidor/login-repartidor.component';
import { LoginAdminComponent } from './paginas/admin/login-admin/login-admin.component';
import { RegistrarAdminComponent } from './paginas/admin/registrar-admin/registrar-admin.component';
import { ListarPedidosAdminComponent } from './paginas/admin/listar-pedidos-admin/listar-pedidos-admin.component';

import { PaginaPrincipalClienteComponent } from './paginas/cliente/pagina-principal-cliente/pagina-principal-cliente.component';
import { ListarPedidosClienteComponent } from './paginas/cliente/listar-pedidos-cliente/listar-pedidos-cliente.component';
import { PedidosClientePendientesComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-pendientes/pedidos-cliente-pendientes.component';
import { PedidosClienteEntregadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-entregados/pedidos-cliente-entregados.component';
import { PedidosClienteRevisadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-revisados/pedidos-cliente-revisados.component';
import { PedidosClienteAceptadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-aceptados/pedidos-cliente-aceptados.component';
import { PedidosClienteRechazadosComponent } from './paginas/cliente/listar-pedidos-cliente/pedidos-cliente-rechazados/pedidos-cliente-rechazados.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { RepartidorComponent } from './paginas/repartidor/repartidor.component';
import { BarraNavegacionRepartidorComponent } from './componentes/barra-navegacion-repartidor/barra-navegacion-repartidor.component';
import { PaginaPrincipalRepartidorComponent } from './paginas/repartidor/pagina-principal-repartidor/pagina-principal-repartidor.component';
import { PedidosRepartidorPendientesComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-pendientes/pedidos-repartidor-pendientes.component';
import { PedidosRepartidorEntregadosComponent } from './paginas/repartidor/pedidos/pedidos-repartidor-entregados/pedidos-repartidor-entregados.component';
import { PaginaPrincipalAdminComponent } from './paginas/admin/pagina-principal-admin/pagina-principal-admin.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { BarraNavegacionAdminComponent } from './componentes/barra-navegacion-admin/barra-navegacion-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    MenuPrincipalComponent,
    FormularioLoginComponent,
    PaginaPrincipalComponent,
    FormularioRegistroComponent,
    RegistrarClienteComponent,
    LoginClienteComponent,
    GenerarPedidoClienteComponent,
    DetallePedidoRepartidorComponent,
    RegistrarRepartidorComponent,
    LoginRepartidorComponent,
    LoginAdminComponent,
    RegistrarAdminComponent,
    ListarPedidosAdminComponent,
    PaginaPrincipalClienteComponent,
    ListarPedidosClienteComponent,
    PedidosClientePendientesComponent,
    PedidosClienteEntregadosComponent,
    PedidosClienteRevisadosComponent,
    PedidosClienteAceptadosComponent,
    PedidosClienteRechazadosComponent,
    ClienteComponent,
    RepartidorComponent,
    BarraNavegacionRepartidorComponent,
    PaginaPrincipalRepartidorComponent,
    PedidosRepartidorPendientesComponent,
    PedidosRepartidorEntregadosComponent,
    PaginaPrincipalAdminComponent,
    AdminComponent,
    BarraNavegacionAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
