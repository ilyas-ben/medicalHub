import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Appointment } from '../../model/appointment.type';
import { Patient } from '../../model/patient.type';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { PatientService } from '../../services/patient/patient.service';

@Component({
  selector: 'app-appointments',
  standalone: false,
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  appointments = signal<Array<Appointment>>([]);
  patients = signal<Array<Patient>>([]);
  newAppointmentForm: FormGroup;

  constructor(
    private readonly appointmentsService: AppointmentsService,
    private readonly fb: FormBuilder,
    private readonly patientService: PatientService
  ) {
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
    // fetching value from the form
    const newAppointment: Appointment = this.newAppointmentForm.value;
    newAppointment.patient = {
      id: this.newAppointmentForm.value.patientId,
    } as Patient;
    // save to backend
    this.appointmentsService
      .save([{ ...this.newAppointmentForm.value }])
      .subscribe(() => {
        this.setAppointments();
        this.newAppointmentForm.reset();
        console.log(this.newAppointmentForm.value);
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
