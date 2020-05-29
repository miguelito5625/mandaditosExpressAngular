import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRepartidorRechazadosComponent } from './pedidos-repartidor-rechazados.component';

describe('PedidosRepartidorRechazadosComponent', () => {
  let component: PedidosRepartidorRechazadosComponent;
  let fixture: ComponentFixture<PedidosRepartidorRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRepartidorRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosRepartidorRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
