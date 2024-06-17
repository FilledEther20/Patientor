import  express,{Request,Response}  from "express";
import patientorService from '../services/services';
import toNewPatientEntry from '../utils';
const patientRouter = express.Router();

patientRouter.get('/', (_req: Request, res: Response) => {
	const data = patientorService.getSafePatientData();
	res.send(data);
});

patientRouter.get('/:patientId',(req:Request,res:Response)=>{
    res.send(patientorService.getPatientbyId(req.params.patientId));
})

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