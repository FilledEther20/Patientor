export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}
export interface Entry{
}
export interface Patient{
  id:string,
  name:string,
  dateOfBirth:string,
  ssn:string,
  gender:'male'|'female'|'other',
  occupation:string,
  entries:Entry[]
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;