import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaGeneralPedidoComponent } from './pagina-general-pedido.component';

describe('PaginaGeneralPedidoComponent', () => {
  let component: PaginaGeneralPedidoComponent;
  let fixture: ComponentFixture<PaginaGeneralPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaGeneralPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGeneralPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
