import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminPendientesComponent } from './pedidos-admin-pendientes.component';

describe('PedidosAdminPendientesComponent', () => {
  let component: PedidosAdminPendientesComponent;
  let fixture: ComponentFixture<PedidosAdminPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdminPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdminPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
