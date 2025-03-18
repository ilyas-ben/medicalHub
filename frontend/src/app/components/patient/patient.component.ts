import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { Patient } from '../../model/patient.type';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { PatientService } from '../../services/patient/patient.service';

@Component({
  selector: 'app-patient',
  standalone: false,
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  patients = signal<Array<Patient>>([]);

  newPatientForm: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _messageService: MessageService,
    private readonly _patientService: PatientService,
    private readonly _appointmentService: AppointmentsService
  ) {
    this.newPatientForm = this._fb.group({
      name: ['', Validators.required],
      patientNumber: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      identityCardNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.setPatients();
  }

  setPatients(): void {
    this._patientService.findAll().subscribe({
      next: (items: Patient[]) => {
        this.patients.set(items);
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error !',
          text: 'Sorry, couldnt fetch data from server, please try again later',
        });
      },
    });
  }

  save() {
    this._patientService.save([this.newPatientForm.value]).subscribe({
      next: () => {
        this.setPatients();
        this.newPatientForm.reset();

        const modalElement = document.getElementById('patientModal');
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
        }

        this._messageService.add({
          severity: 'success',
          summary: 'Done !',
          detail: 'Patient added !',
          life: 3000,
        });
      },
      error: () => {
        this._messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: "Your request couldn't be done, try again later",
          life: 3000,
        });
      },
    });
  }

  deleteById(idPatientToDelete: number) {
    this._appointmentService
      .existsByPatientId(idPatientToDelete)
      .subscribe((response: boolean) => {
        if (response) {
          Swal.fire({
            icon: 'warning',
            title: 'Warning !',
            text: 'This patient has appointments, this action will delete the patient along with his appointments',
            confirmButtonText: 'Delete',
            showCancelButton: true,
            showCloseButton: true,
            customClass: {
              confirmButton: 'btn btn-danger',
              cancelButton: 'btn btn-primary',
            },
          }).then((result) => {
            if (result.isConfirmed) {
              this._patientService
                .deleteByID(idPatientToDelete)
                .subscribe(() => {
                  this.setPatients();
                });
            }
          });
        } else {
          this._patientService.deleteByID(idPatientToDelete).subscribe(() => {
            this.setPatients();
          });
        }
      });
  }
}
