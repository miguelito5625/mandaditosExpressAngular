import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRepartidorPendientesComponent } from './pedidos-repartidor-pendientes.component';

describe('PedidosRepartidorPendientesComponent', () => {
  let component: PedidosRepartidorPendientesComponent;
  let fixture: ComponentFixture<PedidosRepartidorPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRepartidorPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosRepartidorPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
