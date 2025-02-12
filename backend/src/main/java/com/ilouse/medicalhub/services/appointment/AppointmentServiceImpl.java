package com.ilouse.medicalhub.services.appointment;


import com.ilouse.medicalhub.model.Appointement;
import com.ilouse.medicalhub.repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    public AppointmentRepo appointmentRepo;


    @Override
    public List<Appointement> findAll() {
        return appointmentRepo.findAll();
    }

    @Override
    public Appointement findById(Long id) {
        return appointmentRepo.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        appointmentRepo.deleteById(id);
    }

    @Override
    public List<Appointement> saveAll(List<Appointement> appointements) {
        return appointmentRepo.saveAll(appointements);
    }
}
