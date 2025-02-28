import { Component, OnInit, signal } from '@angular/core';
import { AppointmentsService } from '../../services/appointment/appointment.service';
import { Appointment } from '../../model/appointment.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  constructor(private appointmentsService: AppointmentsService) {}

  todayAppointments = signal<Array<Appointment>>([]);

  ngOnInit(): void {
   this.appointmentsService.findTodaysAppointments().subscribe((items: Appointment[]) => {
     this.todayAppointments.set(items);
     console.log(items);
   });
  }

}
