import express, { Request, Response } from 'express';
import diagnosesData from '../data/diagnoses';
import patientData from '../data/patient';
import { Diagnoses } from '../types';
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
	res.send(diagnosesData);
});

export default router;
