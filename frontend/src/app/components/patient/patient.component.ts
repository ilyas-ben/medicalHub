import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { Toast } from 'primeng/toast';
import { Patient } from '../../model/patient.type';
import { PatientService } from '../../services/patient/patient.service';
import { AppointmentsService } from '../../services/appointment/appointment.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    Toast,
    ConfirmDialog,
  ],
  providers: [ConfirmationService, MessageService],
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
    this._patientService.findAll().subscribe((items: Patient[]) => {
      this.patients.set(items);
      console.log(this.patients());
    });
  }

  save() {
    this._patientService.save([this.newPatientForm.value]).subscribe(() => {
      this.setPatients();
      this.newPatientForm.reset();

      // Close the modal
      const modalElement = document.getElementById('patientModal');
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    });
    
    // confirm save
    this._messageService.add({
      severity: 'success',
      summary: 'Done !',
      detail: 'Patient added !',
      life: 3000,
    });
  }

  deleteById(idPatientToDelete: number) {
    /* Swal.fire({
      icon: 'warning',
      title: 'Warning !',
      text: 'This patient has appointments, this action will delete the patient along with his appointments',
      confirmButtonText: 'Delete',
      showCancelButton: true,
      showCloseButton: true,
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-primary'
      }
    }) */

    this._patientService.deleteByID(idPatientToDelete).subscribe(() => {
      this.setPatients();
    });
  }
}
