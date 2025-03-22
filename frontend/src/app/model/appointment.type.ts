import { Patient } from "./patient.type";

export type Appointment = {
    id: number;
    patient: Patient;
    dateTime: Date;
}