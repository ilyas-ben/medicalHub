package com.ilouse.medicalhub.controller;

import com.ilouse.medicalhub.model.Appointement;
import com.ilouse.medicalhub.services.appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;


    @GetMapping
    public List<Appointement> findAll(){
        return appointmentService.findAll();
    }
    @GetMapping("/{id}")
    public Appointement findById(@PathVariable Long id){
        return appointmentService.findById(id);
    }

    @PostMapping
    public List<Appointement> save(@RequestBody List<Appointement> appointements){
        return  appointmentService.saveAll(appointements);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        appointmentService.deleteById(id);
    }

}
