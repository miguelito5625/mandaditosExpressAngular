import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRepartidorEntregadosComponent } from './pedidos-repartidor-entregados.component';

describe('PedidosRepartidorEntregadosComponent', () => {
  let component: PedidosRepartidorEntregadosComponent;
  let fixture: ComponentFixture<PedidosRepartidorEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRepartidorEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosRepartidorEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
