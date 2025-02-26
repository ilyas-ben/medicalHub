import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { Appointment } from '../../model/appointment.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentsService: AppointmentsService) { }

  ngOnInit(): void {
    this.fetchAppointments();
  }

  fetchAppointments(): void {
    this.appointmentsService.getAppointments().subscribe((data: Appointment[]) => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number): void {
    this.appointmentsService.deleteAppointment(id);
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
  }
}
