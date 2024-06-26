import { Entry } from "./diagnose_model";
export interface Patient{
    id:string,
    name:string,
    dateOfBirth:string,
    ssn:string,
    gender:'male'|'female'|'other',
    occupation:string,
    entries:Entry[]
}

export type SafePatientData=Omit<Patient,'ssn' | 'entries'>;
export type PostPatientData=Omit<Patient ,'id' |'entries'>;

export enum Gender{
    Male='male',
    Female='female',
    Other='other',
}