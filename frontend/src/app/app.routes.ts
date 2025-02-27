import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const vDeRetour = await import('./components/patient/patient.component');
            return vDeRetour.PatientComponent;
        }
    },
    {
        path: 'patients',
        loadComponent: async () => {
            const vDeRetour = await import('./components/patient/patient.component');
            return vDeRetour.PatientComponent;
        }
    },
    {
        path: 'appointments',
        loadComponent: async () => {
            const vDeRetour = await import('./components/appointment/appointments.component');
            return vDeRetour.AppointmentsComponent;
        }
    }
];
