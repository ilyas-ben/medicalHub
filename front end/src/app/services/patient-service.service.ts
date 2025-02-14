import { Injectable } from '@angular/core';
import { Patient } from '../model/patient.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private url =  "http://localhost:8081/patients"

  constructor(private http: HttpClient) { }

  addPatient(patients: Patient[]): Observable<Patient[]> {
    return this.http.post<Patient[]>(this.url, patients);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

}
