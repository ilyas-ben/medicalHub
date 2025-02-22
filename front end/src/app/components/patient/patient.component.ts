import { Component, inject, OnInit, signal } from '@angular/core';
import { Patient } from '../../model/patient.type';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {

  patients = signal<Array<Patient>>([]);
  patientService = inject(PatientService);

  newPatientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newPatientForm = this.fb.group({
      name: ['', Validators.required],
      patientNumber: ['', Validators.required],
      socialSecurityNumber: ['', Validators.required],
      identityCardNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.setPatients();
  }

  setPatients(): void {
    this.patientService.getPatients().subscribe((items) => {
      this.patients.set(items);
      console.log(items);
    });
  }

  save() {
    const newPatient: Patient[] = [];
    newPatient.push(this.newPatientForm.value);
    this.patientService
      .addPatient(newPatient)
      .subscribe(() => {
        this.setPatients();
        this.newPatientForm.reset();
        const modalElement = document.getElementById('patientModal');
        if (modalElement) {
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          if (modalInstance) {
            modalInstance.hide();
          }
        }
      });
      

  }

  delete(idPatientToDelete: number) {
    this.patientService.deletePatient(idPatientToDelete);
    this.setPatients();
  }

}
