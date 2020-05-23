import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteEntregadosComponent } from './pedidos-cliente-entregados.component';

describe('PedidosClienteEntregadosComponent', () => {
  let component: PedidosClienteEntregadosComponent;
  let fixture: ComponentFixture<PedidosClienteEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClienteEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
