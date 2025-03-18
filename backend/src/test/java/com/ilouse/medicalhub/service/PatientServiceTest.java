package com.ilouse.medicalhub.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.ilouse.medicalhub.model.Patient;
import com.ilouse.medicalhub.repo.PatientRepo;
import com.ilouse.medicalhub.services.patient.PatientServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

    @Mock
    private PatientRepo patientRepo;

    @InjectMocks
    private PatientServiceImpl patientService;

    private Patient patient;

    @BeforeEach
    void setUp() {
        patient = new Patient();
        patient.setId(1L);
    }

    @Test
    void testFindById() {
        when(patientRepo.findById(1L)).thenReturn(Optional.of(patient));
        Patient found = patientService.findById(1L);
        assertNotNull(found);
        assertEquals(1L, found.getId());
    }

    @Test
    void testDeleteById() {
        doNothing().when(patientRepo).deleteById(1L);
        patientService.deleteById(1L);
        verify(patientRepo, times(1)).deleteById(1L);
    }

    @Test
    void testSaveAll() {
        List<Patient> patients = Arrays.asList(patient);
        when(patientRepo.saveAll(patients)).thenReturn(patients);
        List<Patient> savedPatients = patientService.saveAll(patients);
        assertEquals(1, savedPatients.size());
    }

    @Test
    void testFindAll() {
        List<Patient> patients = Arrays.asList(patient);
        when(patientRepo.findAll()).thenReturn(patients);
        List<Patient> foundPatients = patientService.findAll();
        assertEquals(1, foundPatients.size());
    }
}
