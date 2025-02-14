import { Component, inject, OnInit, signal } from '@angular/core';
import { Patient } from '../../model/patient.type';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  imports: [CommonModule],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent implements OnInit {
  patients = signal<Array<Patient>>([]);
  patientService = inject(PatientService);

  

  ngOnInit(): void {
    this.patientService
      .getPatients()
      .subscribe((items)=>{
        this.patients.set(items);
        console.log(items);
      })
  }

}
