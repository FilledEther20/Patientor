import express from 'express';
import diagnosesData from '../../../data/diagnoses';
import patientData from '../../../data/patient';
import { Diagnoses } from '../types';
const router=express.Router();
router.get('/api/diagnoses',(_req,res)=>{
    res.send(diagnosesData)
})
