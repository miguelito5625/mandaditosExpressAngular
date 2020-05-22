import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePedidoAdminComponent } from './detalle-pedido-admin.component';

describe('DetallePedidoAdminComponent', () => {
  let component: DetallePedidoAdminComponent;
  let fixture: ComponentFixture<DetallePedidoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePedidoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePedidoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
