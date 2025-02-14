import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: async () => {
            const vDeRetour = await import('./components/patient/patient.component');
            return vDeRetour.PatientComponent;
        }
    }

];
