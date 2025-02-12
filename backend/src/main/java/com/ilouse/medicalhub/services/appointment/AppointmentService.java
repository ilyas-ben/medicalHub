package com.ilouse.medicalhub.services.appointment;

import com.ilouse.medicalhub.model.Appointement;

import java.util.List;

public interface AppointmentService {

    List<Appointement> findAll();
    Appointement findById(Long id);
    void deleteById(Long id);
    List<Appointement> saveAll(List<Appointement> appointements);
}
