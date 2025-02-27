import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../../model/patient.type'; // Assuming you have a Patient type
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private url = `${environment.baseURL}/patients`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.url);
  }

  findByID(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.url}/${id}`);
  }

  save(patients: Patient[]): Observable<Patient[]> {
    return this.http.post<Patient[]>(this.url, patients);
  }

  deleteByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
