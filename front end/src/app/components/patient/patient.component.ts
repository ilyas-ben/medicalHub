import { Component, inject, OnInit, signal } from '@angular/core';
import { Patient } from '../../model/patient.type';
import { PatientServiceService } from '../../services/patient-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {
  patients = signal<Array<Patient>>([]);
  patientService = inject(PatientServiceService);

  

  ngOnInit(): void {
    this.patientService
      .getPatients()
      .subscribe((items)=>{
        this.patients.set(items);
      })
  }

}
