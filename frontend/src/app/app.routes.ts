import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: 'patients',
    loadComponent: async () => {
      const vDeRetour = await import('./components/patient/patient.component');
      return vDeRetour.PatientComponent;
    },
  },
  {
    path: 'appointments',
    loadComponent: async () => {
      const vDeRetour = await import(
        './components/appointment/appointments.component'
      );
      return vDeRetour.AppointmentsComponent;
    },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
