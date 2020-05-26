import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalAdminComponent } from './pagina-principal-admin.component';

describe('PaginaPrincipalAdminComponent', () => {
  let component: PaginaPrincipalAdminComponent;
  let fixture: ComponentFixture<PaginaPrincipalAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPrincipalAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPrincipalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
