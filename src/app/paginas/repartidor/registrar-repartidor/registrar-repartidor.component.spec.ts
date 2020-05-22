import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRepartidorComponent } from './registrar-repartidor.component';

describe('RegistrarRepartidorComponent', () => {
  let component: RegistrarRepartidorComponent;
  let fixture: ComponentFixture<RegistrarRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
