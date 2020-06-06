import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRepartidoresAdminComponent } from './menu-repartidores-admin.component';

describe('MenuRepartidoresAdminComponent', () => {
  let component: MenuRepartidoresAdminComponent;
  let fixture: ComponentFixture<MenuRepartidoresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRepartidoresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRepartidoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
