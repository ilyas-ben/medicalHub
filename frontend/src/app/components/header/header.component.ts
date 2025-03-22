import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  items = [
    {
      label: 'MedicalHub',
      disabled: true, // Non-clickable
    },
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      routerLink: '/dashboard',
    },
    {
      label: 'Patients',
      icon: 'pi pi-calendar',
      routerLink: '/patients',
    },
    {
      label: 'Appointments',
      icon: 'pi pi-calendar',
      routerLink: '/appointments',
    },
  ];
}
