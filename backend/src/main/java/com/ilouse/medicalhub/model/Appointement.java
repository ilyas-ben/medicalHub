package com.ilouse.medicalhub.model;


import jakarta.persistence.*;

@Entity
public class Appointement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @JoinColumn
    @ManyToOne
    Patient patient;

    @Column
    Boolean status;

    public Appointement() {
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

    public Appointement(Long id, Patient patient, Boolean status) {
        this.id = id;
        this.patient = patient;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Appointement{" +
                "Id=" + id +
                ", patient=" + patient +
                ", status=" + status +
                '}';
    }
}
