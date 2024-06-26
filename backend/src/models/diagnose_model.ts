export interface Diagnoses{
    code:string,
    name:string,
    latin?:string   
}

export interface BaseEntry{
    id:string,
    date:string,
    description:string,
    specialist:string,
    diagnosisCodes?:Array<Diagnoses['code']>,
}
export enum HealthCheckRating{
    "Healthy"=0,
    "LowRisk"=1,
    "HighRisk"=2,
    "CriticalRisk"=3,
}
export interface HealthCheckEntry extends BaseEntry{
    type:"HealthCheck";
    healthCheckRating:HealthCheckRating;
}

export type Discharge={
    date:string,
    criteria:string,
}

interface HospitalEntry extends BaseEntry{
    type:"Hospital";
    discharge:Discharge;
}

export type SickLeave={
    startDate:string,
    endDate:string,
}

interface OccupationalHealthcareEntry extends BaseEntry{
    type:"OccupationalHealthcare",
    employerName:string,
    sickLeave?:SickLeave
}
export type Entry=BaseEntry|HealthCheckEntry|HospitalEntry|OccupationalHealthcareEntry