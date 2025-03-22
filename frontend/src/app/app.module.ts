import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Router, RouterModule, RouterOutlet } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { providePrimeNG } from 'primeng/config';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppointmentsComponent } from './components/appointment/appointments.component';
import { HeaderComponent } from './components/header/header.component';
import { PatientComponent } from './components/patient/patient.component';
import { DatePickerModule } from 'primeng/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    AppointmentsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    Toast,
    ConfirmDialog,
    RouterOutlet,
    RouterModule.forRoot(routes),
    CalendarModule,
    MenubarModule,
    DatePickerModule
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark',
        },
      },
    }),
    ConfirmationService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
