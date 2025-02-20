import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  private url = "http://localhost:8080/patients"

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

  addPatient(patients: Patient[]): Observable<Patient[]> {
    return this.http.post<Patient[]>(this.url, patients);
  }

  deletePatient(idPatientToDelete: number) {
    this.http.delete(this.url + '/' + idPatientToDelete).subscribe();
  }

}
