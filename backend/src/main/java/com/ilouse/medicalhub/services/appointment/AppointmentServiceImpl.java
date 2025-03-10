package com.ilouse.medicalhub.services.appointment;


import com.ilouse.medicalhub.model.Appointment;
import com.ilouse.medicalhub.repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class AppointmentServiceImpl implements AppointmentService {

    @Autowired
    private AppointmentRepo appointmentRepo;


    @Override
    public List<Appointment> findAll() {
        return appointmentRepo.findAll();
    }

    @Override
    public Appointment findById(Long id) {
        return appointmentRepo.findById(id).get();
    }

    @Override
    public void deleteById(Long id) {
        appointmentRepo.deleteById(id);
    }

    @Override
    public List<Appointment> saveAll(List<Appointment> appointments) {
        return appointmentRepo.saveAll(appointments);
    }

    @Override
    public List<Appointment> findTodaysAppointments() {
        return appointmentRepo.findTodaysAppointments();
    }

    @Override
    public void changeStateById(Long id) {
     appointmentRepo.changeStateById(id);
    }
}
