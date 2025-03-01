import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Patient } from '../../model/patient.type';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient/patient.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';


@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectButtonModule, ButtonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  patients = signal<Array<Patient>>([]);
  patientService = inject(PatientService);

  newPatientForm: FormGroup;

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {
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
      this.cdr.detectChanges();
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
  }

  deleteById(idPatientToDelete: number) {
    this.patientService.deleteByID(idPatientToDelete).subscribe(() => {
      this.setPatients();
    });
  }
}
