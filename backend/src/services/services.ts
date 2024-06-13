import diagnosesData from '../data/diagnoses';
import patientData from '../data/patient';
import { SafePatientData,Diagnoses } from '../types';

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

export default {
    getDiagnoses,
	getSafePatientData,
};
