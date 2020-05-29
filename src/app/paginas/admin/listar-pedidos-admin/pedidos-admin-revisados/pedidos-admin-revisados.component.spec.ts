import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosAdminRevisadosComponent } from './pedidos-admin-revisados.component';

describe('PedidosAdminRevisadosComponent', () => {
  let component: PedidosAdminRevisadosComponent;
  let fixture: ComponentFixture<PedidosAdminRevisadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosAdminRevisadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosAdminRevisadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
