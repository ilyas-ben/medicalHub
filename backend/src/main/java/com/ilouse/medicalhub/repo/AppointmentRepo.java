package com.ilouse.medicalhub.repo;

import com.ilouse.medicalhub.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface AppointmentRepo extends JpaRepository<Appointment, Long>{
    @Query("SELECT a FROM Appointment a WHERE FUNCTION('DATE', a.dateTime) = CURRENT_DATE")
    List<Appointment> findTodaysAppointments();

    @Transactional
    @Modifying
    @Query("UPDATE Appointment a SET a.status = CASE WHEN a.status = TRUE THEN FALSE ELSE TRUE END WHERE a.id = :id")
    void changeStateById(Long id);
}
