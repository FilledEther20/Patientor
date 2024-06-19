import  express,{Request,Response}  from "express";
import patientorService from '../services/services';
import toNewPatientEntry from '../utils';
const patientRouter = express.Router();

patientRouter.get('/', (_req: Request, res: Response) => {
	const data = patientorService.getSafePatientData();
	res.send(data);
});

patientRouter.get('/:patientId', (req: Request, res: Response) => {
    const patientId = req.params.patientId;
    const patient = patientorService.getPatientbyId(patientId);
    if (patient) {
        res.send(patient);
    } else {
        res.status(404).send('Patient not found');
    }
});

patientRouter.post('/', (req:Request, res:Response) => {
    try {
        const newPatientEntry=toNewPatientEntry(req.body);
        const addedEntry=patientorService.addPatient(newPatientEntry);
        res.json(addedEntry);
    } catch (e) {
        res.status(400).send(e);
    }
});

export default patientRouter;