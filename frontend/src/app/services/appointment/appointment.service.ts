import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../model/appointment.type'; // Assuming you have an Appointment type
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private url = `${environment.baseURL}/appointments`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url);
  }

  findByID(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.url}/${id}`);
  }

  save(appointments: Appointment[]): Observable<Appointment[]> {
    return this.http.post<Appointment[]>(this.url, appointments);
  }

  deleteByID(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  findTodaysAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.url}/todaysAppointment`);
  }
}
