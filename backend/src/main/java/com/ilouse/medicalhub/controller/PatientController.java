package com.ilouse.medicalhub.controller;

import com.ilouse.medicalhub.model.Patient;

import com.ilouse.medicalhub.services.patient.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @Autowired
    private PatientService patientService;


    @GetMapping
    public List<Patient> findAll(){
        return patientService.findAll();
    }

    @GetMapping("/{id}")
    public Patient findById(@PathVariable Long id){
        return patientService.findById(id);
    }

    @PostMapping
    public List<Patient> save(@RequestBody List<Patient> patients){
        return  patientService.saveAll(patients);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        patientService.deleteById(id);
    }
// hotswap
}
