import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

export const appConfig = {

  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)],
  imports:[HttpClientModule,]
};
