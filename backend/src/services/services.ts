import { v4 as uuidv4 } from 'uuid';
import diagnosesData from '../data/diagnoses';
import patientData from '../data/patient';
import { SafePatientData,Patient} from '../models/patient_model';
import { Diagnoses } from '../models/diagnose_model';

const getDiagnoses=():Diagnoses[]=>{
    return diagnosesData
}

const getSafePatientData = (): SafePatientData[] => {
	return patientData.map(({ ssn, name, dateOfBirth, gender, occupation }) => ({
		ssn,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const getPatientbyId=(id:string):SafePatientData|undefined=>{
	return patientData.find((patient)=>patient.id==id);
}

const addPatient=(entry:SafePatientData):Patient=>{
	const newPatientEntry = {
		id: uuidv4(),
		...entry
	  };
	patientData.push(newPatientEntry);
	return newPatientEntry;
}

export default {
    getDiagnoses,
	getSafePatientData,
	getPatientbyId,
	addPatient,
};
