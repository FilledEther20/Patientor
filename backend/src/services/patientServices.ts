import { v4 as uuidv4 } from 'uuid';
import diagnosesData from '../data/diagnoses';
import patientData from '../data/patient';
import { SafePatientData, Patient, PostPatientData } from '../models/patient_model';
import { Diagnoses } from '../models/diagnose_model';

const getDiagnoses = (): Diagnoses[] => {
    return diagnosesData;
};

const getSafePatientData = (): SafePatientData[] => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};

const getPatientbyId = (id: string): SafePatientData | undefined => {
    const patient = patientData.find((patient) => patient.id === id);
    return patient;
};

const addPatient = (entry: PostPatientData): Patient => {
    const newPatientEntry: Patient = {
        id: uuidv4(),
		entries:[],
        ...entry,
    };
    patientData.push(newPatientEntry);
    return newPatientEntry;
};

export default {
    getDiagnoses,
    getSafePatientData,
    getPatientbyId,
    addPatient,
};
