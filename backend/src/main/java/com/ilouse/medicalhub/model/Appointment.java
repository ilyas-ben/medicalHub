package com.ilouse.medicalhub.model;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @JoinColumn
    @ManyToOne
    Patient patient;

    @Column
    LocalDateTime dateTime;

    @Column
    Boolean status;



    public Appointment() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "id=" + id +
                ", patient=" + patient +
                ", dateTime=" + dateTime +
                ", status=" + status +
                '}';
    }

    public Appointment(Long id, Patient patient, LocalDateTime dateTime, Boolean status) {
        this.id = id;
        this.patient = patient;
        this.dateTime = dateTime;
        this.status = status;
    }

}
