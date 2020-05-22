import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRepartidorComponent } from './login-repartidor.component';

describe('LoginRepartidorComponent', () => {
  let component: LoginRepartidorComponent;
  let fixture: ComponentFixture<LoginRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
