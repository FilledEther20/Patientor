import express from 'express';
import cors from 'cors';
const app = express();
import patientatorRouter from './routes/routes';
app.use(express.json());
app.use(cors());
const PORT = 3003;

//route for diagnoses
app.use('/api', patientatorRouter);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
