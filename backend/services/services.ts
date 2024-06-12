import patientData from "../../../data/patient";
import diagnosesData from "../../../data/diagnoses";
import { Diagnoses, Patient } from "../types";


const getDiagnosesData=():Diagnoses[]=>{
    return diagnosesData
}

const getPatientData=():Patient[]=>{
    return patientData
}


export default{
    getDiagnosesData,
    getPatientData,
}