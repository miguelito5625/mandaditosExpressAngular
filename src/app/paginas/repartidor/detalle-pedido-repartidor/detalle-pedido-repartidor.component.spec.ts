import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePedidoRepartidorComponent } from './detalle-pedido-repartidor.component';

describe('DetallePedidoRepartidorComponent', () => {
  let component: DetallePedidoRepartidorComponent;
  let fixture: ComponentFixture<DetallePedidoRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePedidoRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePedidoRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
