import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminRechazadosComponent } from './pedidos-admin-rechazados.component';

describe('PedidosAdminRechazadosComponent', () => {
  let component: PedidosAdminRechazadosComponent;
  let fixture: ComponentFixture<PedidosAdminRechazadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdminRechazadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdminRechazadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
