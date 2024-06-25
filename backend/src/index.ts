import express from 'express';
import cors from 'cors';
const app = express();
import patientatorRouter from './routes/route_pat';
import diagnosesRouter from './routes/route_dia';
app.use(express.json());
app.use(cors());
const PORT = 3003;

//route for patients
app.use('/api/patient', patientatorRouter);

app.use('/api/diagnoses',diagnosesRouter);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
