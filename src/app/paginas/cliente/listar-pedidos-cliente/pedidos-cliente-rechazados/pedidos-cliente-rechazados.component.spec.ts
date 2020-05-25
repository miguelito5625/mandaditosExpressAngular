import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteRechazadosComponent } from './pedidos-cliente-rechazados.component';

describe('PedidosClienteRechazadosComponent', () => {
  let component: PedidosClienteRechazadosComponent;
  let fixture: ComponentFixture<PedidosClienteRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClienteRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
