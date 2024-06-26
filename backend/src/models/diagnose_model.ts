export interface Diagnoses{
    code:string,
    name:string,
    latin?:string   
}

interface BaseEntry{
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
interface HealthCheckEntry extends BaseEntry{
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
    type:"Occupational Healthcare",
    employerName:string,
    sickLeave?:SickLeave
}
export type Entry=HealthCheckEntry|HospitalEntry|OccupationalHealthcareEntry