import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminAceptadosComponent } from './pedidos-admin-aceptados.component';

describe('PedidosAdminAceptadosComponent', () => {
  let component: PedidosAdminAceptadosComponent;
  let fixture: ComponentFixture<PedidosAdminAceptadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdminAceptadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdminAceptadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
