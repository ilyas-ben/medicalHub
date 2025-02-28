package com.ilouse.medicalhub.services.appointment;

import com.ilouse.medicalhub.model.Appointment;

import java.util.List;

public interface AppointmentService {

    List<Appointment> findAll();
    Appointment findById(Long id);
    void deleteById(Long id);
    List<Appointment> saveAll(List<Appointment> appointments);

    public List<Appointment> findTodaysAppointments();
}
