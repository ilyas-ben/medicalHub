package com.ilouse.medicalhub.model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column
    Integer patientId;

    @Column
    String socialSecurityNumber;

    public Patient() {}

    public Patient(Integer patientId, String socialSecurityNumber) {
        this.patientId = patientId;
        this.socialSecurityNumber = socialSecurityNumber;
    }
} 
