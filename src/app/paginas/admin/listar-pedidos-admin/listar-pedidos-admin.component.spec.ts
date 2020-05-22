import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosAdminComponent } from './listar-pedidos-admin.component';

describe('ListarPedidosAdminComponent', () => {
  let component: ListarPedidosAdminComponent;
  let fixture: ComponentFixture<ListarPedidosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPedidosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
