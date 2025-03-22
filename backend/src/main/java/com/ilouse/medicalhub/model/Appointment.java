package com.ilouse.medicalhub.model;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn
    @ManyToOne(cascade = CascadeType.ALL)
    private Patient patient;

    @Column
    private LocalDateTime dateTime;

    @Column
    private Boolean status; // schedued ,  canceled

    public Appointment() {
    }

    public Appointment(Long id, Patient patient, LocalDateTime dateTime, Boolean status) {
        this.id = id;
        this.patient = patient;
        this.dateTime = dateTime;
        this.status = status;
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

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
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
}
