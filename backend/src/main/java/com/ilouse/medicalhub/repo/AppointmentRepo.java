package com.ilouse.medicalhub.repo;

import com.ilouse.medicalhub.model.Appointement;
import org.springframework.data.jpa.repository.JpaRepository;


public interface AppointmentRepo extends JpaRepository<Appointement, Long>{
}
