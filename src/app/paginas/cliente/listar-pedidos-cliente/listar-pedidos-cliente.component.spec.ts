import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosClienteComponent } from './listar-pedidos-cliente.component';

describe('ListarPedidosClienteComponent', () => {
  let component: ListarPedidosClienteComponent;
  let fixture: ComponentFixture<ListarPedidosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPedidosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
