import { Component, OnInit, signal } from '@angular/core';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { Appointment } from '../../model/appointment.type';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient/patient.service';
import { Patient } from '../../model/patient.type';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments = signal<Array<Appointment>>([]);
  patients = signal<Array<Patient>>([]);
  newAppointmentForm: FormGroup;

  constructor(private appointmentsService: AppointmentsService, private fb: FormBuilder, private patientService: PatientService) {
    this.newAppointmentForm = this.fb.group({
      patientId: ['', Validators.required],
      dateTime: ['', Validators.required],
      status: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    this.setAppointments();
    this.setPatients();
  }

  setAppointments(): void {
    this.appointmentsService.findAll().subscribe((items: Appointment[]) => {
      this.appointments.set(items);
    });
  }

  setPatients(): void {
    this.patientService.findAll().subscribe((items: Patient[]) => {
      this.patients.set(items);
    });
  }
  save() {
    const newAppointment: Appointment = this.newAppointmentForm.value;

    newAppointment.patient = { id: this.newAppointmentForm.value.patientId } as Patient; 

    /* patient: , */

    this.appointmentsService.save([{...this.newAppointmentForm.value}]).subscribe(() => {
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

    console.log(newAppointment);
  }

  deleteById(idAppointmentToDelete: number): void {
    this.appointmentsService.deleteByID(idAppointmentToDelete).subscribe(() => {
      this.setAppointments();
    });
  }
}
