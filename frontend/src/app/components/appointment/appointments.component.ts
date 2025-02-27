import { Component, OnInit, signal } from '@angular/core';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { Appointment } from '../../model/appointment.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments = signal<Array<Appointment>>([]);

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.setAppointments();
  }

  setAppointments(): void {
    this.appointmentsService.findAll().subscribe((items: Appointment[]) => {
      this.appointments.set(items);
    });
  }

  /* save() {
    const newAppointment: Appointment[] = [];
    newAppointment.push(this.newAppointmentForm.value);

    this.appointmentService.save(newAppointment).subscribe(() => {
      this.setAppointments();
      this.newAppointmentForm.reset();

      // Close the modal
      const modalElement = document.getElementById('AppointmentModal');
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    });
  } */

  deleteById(idAppointmentToDelete: number): void {
    this.appointmentsService.deleteByID(idAppointmentToDelete).subscribe(() => {
      this.setAppointments();
    });
  }
}
