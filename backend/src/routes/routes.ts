import express, { Request, Response } from 'express';
import patientorService from '../services/services';
const router = express.Router();

router.get('/diagnoses', (_req: Request, res: Response) => {
	res.send(patientorService.getDiagnoses());
});

router.get('/patient', (_req: Request, res: Response) => {
	const data = patientorService.getSafePatientData();
	res.send(data);
});

export default router;
