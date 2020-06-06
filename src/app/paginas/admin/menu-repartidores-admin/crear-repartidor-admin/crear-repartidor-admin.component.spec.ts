import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRepartidorAdminComponent } from './crear-repartidor-admin.component';

describe('CrearRepartidorAdminComponent', () => {
  let component: CrearRepartidorAdminComponent;
  let fixture: ComponentFixture<CrearRepartidorAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRepartidorAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRepartidorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
