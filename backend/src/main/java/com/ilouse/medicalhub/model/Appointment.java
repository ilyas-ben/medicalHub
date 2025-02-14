package com.ilouse.medicalhub.model;


import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
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
}
