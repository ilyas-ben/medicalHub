import { Patient } from "./patient.type";

export type Appointment = {
    id: number;
    patient: Patient;
    dateTime: Date;
    status: boolean; // true for scheduled, false for canceled
}