import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Patient } from '../../model/patient.type';
import { PatientService } from '../../services/patient/patient.service';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Toast, ToastModule } from 'primeng/toast';
import Swal from 'sweetalert2';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { ConfirmDialog } from 'primeng/confirmdialog';

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
    ConfirmDialog         
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  patients = signal<Array<Patient>>([]);
  patientService = inject(PatientService);

  newPatientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.newPatientForm = this.fb.group({
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
    this.patientService.findAll().subscribe((items: Patient[]) => {
      this.patients.set(items);
      console.log(this.patients());
    });
  }

  save() {
    this.patientService.save([this.newPatientForm.value]).subscribe(() => {
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
    this.messageService.add({
      severity: 'success',
      summary: 'Done !',
      detail: 'Patient added !',
      life: 3000,
    });
  }

  deleteById(idPatientToDelete: number) {
    Swal.fire({
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
    })
  }
}
