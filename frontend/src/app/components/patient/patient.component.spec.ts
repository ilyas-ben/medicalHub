import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientComponent } from './patient.component';
import { PatientService } from '../../services/patient/patient.service';
import { Observable, of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
import { Patient } from '../../model/patient.type';

describe('PatientComponent', () => {
  let component: PatientComponent;
  let fixture: ComponentFixture<PatientComponent>;
  let mockPatientService: jasmine.SpyObj<PatientService>;

  beforeEach(async () => {
    mockPatientService = jasmine.createSpyObj('PatientService', [
      'findAll',
      'save',
      'deleteByID',
    ]);

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        IconFieldModule,
        InputIconModule,
      ],
       
      providers: [{ provide: PatientService, useValue: mockPatientService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and fetch patients', () => {
    const mockPatients: Observable<Patient[]> = of([
      {
        id: 1,
        name: 'John Doe',
        patientNumber: 123,
        socialSecurityNumber: 'SSN123',
        identityCardNumber: 'ID123',
        phoneNumber: 123456789,
      },
    ]);
    mockPatientService.findAll.and.returnValue(mockPatients);

    component.ngOnInit();
    expect(mockPatientService.findAll).toHaveBeenCalled();
  });

  it('should save a new patient', () => {
    spyOn(component, 'setPatients');

    let mockNewPatient: Patient = {

      name: 'John Doe',
      patientNumber: 123,
      socialSecurityNumber: '456',
      identityCardNumber: '789',
      phoneNumber: 56541,
    };

    component.newPatientForm.setValue(mockNewPatient);

    mockPatientService.save.and.returnValue(of([mockNewPatient]));

    component.save();
    expect(mockPatientService.save).toHaveBeenCalled();
    expect(component.setPatients).toHaveBeenCalled();
  });

  it('should delete a patient by ID', () => {
    mockPatientService.deleteByID.and.returnValue(of(void 0));
    
    spyOn(component, 'setPatients');

    component.deleteById(1);
    expect(mockPatientService.deleteByID).toHaveBeenCalledWith(1);
    expect(component.setPatients).toHaveBeenCalled();
  });
});
