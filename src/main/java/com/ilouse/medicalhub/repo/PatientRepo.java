package com.ilouse.medicalhub.repo;


import com.ilouse.medicalhub.model.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.*;

public interface PatientRepo extends JpaRepository<Patient, Integer> {
}
