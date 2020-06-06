import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPedidosAdminComponent } from './menu-pedidos-admin.component';

describe('MenuPedidosAdminComponent', () => {
  let component: MenuPedidosAdminComponent;
  let fixture: ComponentFixture<MenuPedidosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPedidosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPedidosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
