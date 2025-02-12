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
    String name;

    @Column
    Integer patientNumber;

    @Column
    String socialSecurityNumber;

    public Patient() {}

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", patientNumber=" + patientNumber +
                ", socialSecurityNumber='" + socialSecurityNumber + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPatientNumber() {
        return patientNumber;
    }

    public void setPatientNumber(Integer patientNumber) {
        this.patientNumber = patientNumber;
    }

    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public Patient(Long id, String name, Integer patientNumber, String socialSecurityNumber) {
        this.id = id;
        this.name = name;
        this.patientNumber = patientNumber;
        this.socialSecurityNumber = socialSecurityNumber;
    }
}
