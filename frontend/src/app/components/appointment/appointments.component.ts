import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from '../../model/appointment.type';
import { Patient } from '../../model/patient.type';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { PatientService } from '../../services/patient/patient.service';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    private readonly _appointmentsService: AppointmentsService,
    private readonly _fb: FormBuilder,
    private readonly _patientService: PatientService,
    private readonly _confirmationService: ConfirmationService,
    private readonly _messageService: MessageService
  ) {
    this.newAppointmentForm = this._fb.group({
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
    this._appointmentsService.findAll().subscribe((items: Appointment[]) => {
      this.appointments.set(items);
    });
  }

  setPatients(): void {
    this._patientService.findAll().subscribe((items: Patient[]) => {
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
    this._appointmentsService
      .save([{ ...this.newAppointmentForm.value }])
      .subscribe(() => {
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
        // Show success message
        this._messageService.add({
          severity: 'success',
          summary: 'Done !',
          detail: 'Appointment scheduled !',
          life: 3000,
        });
      });

    console.log(newAppointment);
  }

  deleteById(idAppointmentToDelete: number): void {
    this._confirmationService.confirm({
      message: 'Are you sure that you want to delete this appointment?',
      accept: () => {
        this._appointmentsService
          .deleteByID(idAppointmentToDelete)
          .subscribe(() => {
            this.setAppointments();
            this._messageService.add({
              severity: 'success',
              summary: 'Done !',
              detail: 'Appointment deleted !',
              life: 3000,
            });
          });
      },
    });
  }
}
