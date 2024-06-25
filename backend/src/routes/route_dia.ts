import express, { Request, Response } from 'express';
import patientorService from '../services/patientServices';
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
	res.send(patientorService.getDiagnoses());
});


export default router;
