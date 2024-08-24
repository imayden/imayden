import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterOutlet } from '@angular/router'; 
import { routes } from './app/app.routes';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent, RouterOutlet],
  template: `
    <app-app></app-app>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(ReactiveFormsModule, FormsModule, CommonModule, BrowserAnimationsModule),
    provideRouter(routes), 
  ],
}).catch((err) => console.error(err));;
