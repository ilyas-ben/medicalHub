import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { AppointmentsComponent } from './components/appointment/appointments.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  { path: 'patients', component: PatientComponent },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
