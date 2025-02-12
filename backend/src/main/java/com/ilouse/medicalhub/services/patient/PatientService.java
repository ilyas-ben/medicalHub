package com.ilouse.medicalhub.services.patient;

import com.ilouse.medicalhub.model.Patient;

import java.util.List;

public interface PatientService {
    Patient findById(Long id);
    void deleteById(Long id);
    List<Patient> saveAll(List<Patient> patient);
    List<Patient> findAll();

} 
