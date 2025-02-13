package com.ilouse.medicalhub.repo;

import com.ilouse.medicalhub.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AppointmentRepo extends JpaRepository<Appointment, Long>{
}
