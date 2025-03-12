package com.ilouse.medicalhub.services.patient;

import com.ilouse.medicalhub.model.Patient;

import java.util.List;

public interface PatientService {
    List<Patient> findAll();
    List<Patient> saveAll(List<Patient> patient);
    Patient findById(Long id);
    void deleteById(Long id);

}
