import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteAceptadosComponent } from './pedidos-cliente-aceptados.component';

describe('PedidosClienteAceptadosComponent', () => {
  let component: PedidosClienteAceptadosComponent;
  let fixture: ComponentFixture<PedidosClienteAceptadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClienteAceptadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
