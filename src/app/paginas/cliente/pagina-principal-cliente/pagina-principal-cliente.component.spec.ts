import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalClienteComponent } from './pagina-principal-cliente.component';

describe('PaginaPrincipalClienteComponent', () => {
  let component: PaginaPrincipalClienteComponent;
  let fixture: ComponentFixture<PaginaPrincipalClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
