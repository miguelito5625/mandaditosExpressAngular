import { TestBed } from '@angular/core/testing';

import { GuardRepartidorGuard } from './guard-repartidor.guard';

describe('GuardRepartidorGuard', () => {
  let guard: GuardRepartidorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardRepartidorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
