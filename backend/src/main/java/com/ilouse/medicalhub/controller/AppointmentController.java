package com.ilouse.medicalhub.controller;

import com.ilouse.medicalhub.model.Appointment;
import com.ilouse.medicalhub.services.appointment.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;


    @GetMapping
    public List<Appointment> findAll(){
        return appointmentService.findAll();
    }

    @GetMapping("/{id}")
    public Appointment findById(@PathVariable Long id){
        return appointmentService.findById(id);
    }

    @PostMapping
    public List<Appointment> save(@RequestBody List<Appointment> appointments){
        return  appointmentService.saveAll(appointments);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        appointmentService.deleteById(id);
    }

    @GetMapping("/todaysAppointment")
    public List<Appointment> findTodaysAppointments(){
        return appointmentService.findTodaysAppointments();
    }


    @PostMapping("/changestate/{id}")
    public void cancel(@PathVariable Long id){
        appointmentService.changeStateById(id);
    }


    @GetMapping("/{id}/hasappoinments")
    public boolean existsByPatientId(@PathVariable Long id){
        return appointmentService.existsByPatientId(id);
    }
}
