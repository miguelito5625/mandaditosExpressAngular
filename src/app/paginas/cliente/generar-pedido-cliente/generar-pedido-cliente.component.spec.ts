import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPedidoClienteComponent } from './generar-pedido-cliente.component';

describe('GenerarPedidoClienteComponent', () => {
  let component: GenerarPedidoClienteComponent;
  let fixture: ComponentFixture<GenerarPedidoClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarPedidoClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarPedidoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
