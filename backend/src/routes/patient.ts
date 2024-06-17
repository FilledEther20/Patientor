import  express,{Request,Response}  from "express";
import patientorService from '../services/services';

const patientRouter = express.Router();

patientRouter.get('/patient', (_req: Request, res: Response) => {
	const data = patientorService.getSafePatientData();
	res.send(data);
});

patientRouter.post('/patient', (req, res) => {});

export default patientRouter;