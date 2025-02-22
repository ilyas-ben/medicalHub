package com.ilouse.medicalhub.model;



import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column
    String name;

    @Column
    String patientNumber;

    @Column
    String socialSecurityNumber;

    @Column
    String identityCardNumber;

    @Column
    Integer phoneNumber;


    public Patient() {
    }

    public Patient(Long id, String name, String patientNumber, String socialSecurityNumber, String identityCardNumber, Integer phoneNumber) {
        this.id = id;
        this.name = name;
        this.patientNumber = patientNumber;
        this.socialSecurityNumber = socialSecurityNumber;
        this.identityCardNumber = identityCardNumber;
        this.phoneNumber = phoneNumber;
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

    public String getPatientNumber() {
        return patientNumber;
    }

    public void setPatientNumber(String patientNumber) {
        this.patientNumber = patientNumber;
    }

    public String getSocialSecurityNumber() {
        return socialSecurityNumber;
    }

    public void setSocialSecurityNumber(String socialSecurityNumber) {
        this.socialSecurityNumber = socialSecurityNumber;
    }

    public String getIdentityCardNumber() {
        return identityCardNumber;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setIdentityCardNumber(String identityCardNumber) {
        this.identityCardNumber = identityCardNumber;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", patientNumber='" + patientNumber + '\'' +
                ", socialSecurityNumber='" + socialSecurityNumber + '\'' +
                ", identityCardNumber='" + identityCardNumber + '\'' +
                ", phoneNumber=" + phoneNumber +
                '}';
    }
}
