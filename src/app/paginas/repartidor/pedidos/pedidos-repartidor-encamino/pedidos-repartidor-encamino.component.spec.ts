import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosRepartidorEncaminoComponent } from './pedidos-repartidor-encamino.component';

describe('PedidosRepartidorEncaminoComponent', () => {
  let component: PedidosRepartidorEncaminoComponent;
  let fixture: ComponentFixture<PedidosRepartidorEncaminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosRepartidorEncaminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosRepartidorEncaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
