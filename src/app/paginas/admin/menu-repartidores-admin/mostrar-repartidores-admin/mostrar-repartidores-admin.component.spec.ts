import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarRepartidoresAdminComponent } from './mostrar-repartidores-admin.component';

describe('MostrarRepartidoresAdminComponent', () => {
  let component: MostrarRepartidoresAdminComponent;
  let fixture: ComponentFixture<MostrarRepartidoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarRepartidoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarRepartidoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
