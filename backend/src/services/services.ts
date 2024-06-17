import diagnosesData from '../data/diagnoses';
import patientData from '../data/patient';
import { SafePatientData } from '../models/patient_model';
import { Diagnoses } from '../models/diagnose_model';

const getDiagnoses=():Diagnoses[]=>{
    return diagnosesData
}

const getSafePatientData = (): SafePatientData[] => {
	return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const getPatientbyId=(id:string):SafePatientData|undefined=>{
	return patientData.find((patient)=>patient.id==id);
}
export default {
    getDiagnoses,
	getSafePatientData,
	getPatientbyId,
};
