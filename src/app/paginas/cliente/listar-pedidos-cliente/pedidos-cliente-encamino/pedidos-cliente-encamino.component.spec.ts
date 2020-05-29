import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClienteEncaminoComponent } from './pedidos-cliente-encamino.component';

describe('PedidosClienteEncaminoComponent', () => {
  let component: PedidosClienteEncaminoComponent;
  let fixture: ComponentFixture<PedidosClienteEncaminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClienteEncaminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteEncaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
