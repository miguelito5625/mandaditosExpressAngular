import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosClientePendientesComponent } from './pedidos-cliente-pendientes.component';

describe('PedidosClientePendientesComponent', () => {
  let component: PedidosClientePendientesComponent;
  let fixture: ComponentFixture<PedidosClientePendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosClientePendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClientePendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
