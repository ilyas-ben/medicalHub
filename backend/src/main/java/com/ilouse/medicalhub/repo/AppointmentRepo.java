package com.ilouse.medicalhub.repo;

import com.ilouse.medicalhub.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface AppointmentRepo extends JpaRepository<Appointment, Long>{
    @Query("SELECT a FROM Appointment a WHERE FUNCTION('DATE', a.dateTime) = CURRENT_DATE")
    List<Appointment> findTodaysAppointments();
}
