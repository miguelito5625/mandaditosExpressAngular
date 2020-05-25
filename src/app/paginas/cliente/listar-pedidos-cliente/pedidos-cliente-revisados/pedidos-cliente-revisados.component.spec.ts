import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteRevisadosComponent } from './pedidos-cliente-revisados.component';

describe('PedidosClienteRevisadosComponent', () => {
  let component: PedidosClienteRevisadosComponent;
  let fixture: ComponentFixture<PedidosClienteRevisadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClienteRevisadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteRevisadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
