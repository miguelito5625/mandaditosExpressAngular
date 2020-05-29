import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminEntregadosComponent } from './pedidos-admin-entregados.component';

describe('PedidosAdminEntregadosComponent', () => {
  let component: PedidosAdminEntregadosComponent;
  let fixture: ComponentFixture<PedidosAdminEntregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdminEntregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdminEntregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
