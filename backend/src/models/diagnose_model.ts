export interface Diagnoses{
    code:string,
    name:string,
    latin?:string   
}

interface BaseEntry{
    id:string,
    date:string,
    type:string,
    specialist:string,
    diagnosisCodes:Array<Diagnoses['code']>,
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