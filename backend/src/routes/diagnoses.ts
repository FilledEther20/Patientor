import express, { Request, Response } from 'express';
import patientorService from '../services/services';
const router = express.Router();

router.get('/diagnoses', (_req: Request, res: Response) => {
	res.send(patientorService.getDiagnoses());
});


export default router;
