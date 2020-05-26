import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionRepartidorComponent } from './barra-navegacion-repartidor.component';

describe('BarraNavegacionRepartidorComponent', () => {
  let component: BarraNavegacionRepartidorComponent;
  let fixture: ComponentFixture<BarraNavegacionRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacionRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
