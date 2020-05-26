import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalRepartidorComponent } from './pagina-principal-repartidor.component';

describe('PaginaPrincipalRepartidorComponent', () => {
  let component: PaginaPrincipalRepartidorComponent;
  let fixture: ComponentFixture<PaginaPrincipalRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
