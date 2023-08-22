import { Injector, StaticProvider, Type } from '@angular/core';

export function classWithProviders<T>(token: Type<T>, providers: StaticProvider[]): T {
  return Injector.create({
    providers: [...providers, { provide: token }]
  }).get(token);
}
