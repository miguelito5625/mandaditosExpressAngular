import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionAdminComponent } from './barra-navegacion-admin.component';

describe('BarraNavegacionAdminComponent', () => {
  let component: BarraNavegacionAdminComponent;
  let fixture: ComponentFixture<BarraNavegacionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraNavegacionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
