import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosRepartidorComponent } from './listar-pedidos-repartidor.component';

describe('ListarPedidosRepartidorComponent', () => {
  let component: ListarPedidosRepartidorComponent;
  let fixture: ComponentFixture<ListarPedidosRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPedidosRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidosRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
