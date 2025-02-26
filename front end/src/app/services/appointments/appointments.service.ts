import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../model/appointment.type'; // Assuming you have an Appointment type

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private url = "http://localhost:8080/appointments";

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.url);
  }

  addAppointment(appointments: Appointment[]): Observable<Appointment[]> {
    return this.http.post<Appointment[]>(this.url, appointments);
  }

  deleteAppointment(idAppointmentToDelete: number) {
    this.http.delete(this.url + '/' + idAppointmentToDelete).subscribe();
  }
}
