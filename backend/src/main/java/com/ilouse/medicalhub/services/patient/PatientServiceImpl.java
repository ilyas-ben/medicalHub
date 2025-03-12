package com.ilouse.medicalhub.services.patient;

import com.ilouse.medicalhub.model.Patient;
import com.ilouse.medicalhub.repo.PatientRepo;
import com.ilouse.medicalhub.services.appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    @Autowired
    private PatientRepo patientRepo;

    @Override
    public Patient findById(Long id) {
        return patientRepo.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        patientRepo.deleteById(id);
    }

    @Override
    public List<Patient> saveAll(List<Patient> patients) {
        return patientRepo.saveAll(patients);
    }

    @Override
    public List<Patient> findAll() {
        return patientRepo.findAll();
    }
}
