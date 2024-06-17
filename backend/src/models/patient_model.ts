export interface Patient{
    id:string,
    name:string,
    dateOfBirth:string,
    ssn:string,
    gender:'male'|'female'|'other',
    occupation:string,
}

export type SafePatientData=Omit<Patient,'id'>;

export enum Gender{
    Male='male',
    Female='female',
    Other='other',
}