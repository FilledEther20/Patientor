import express from 'express';
const app = express();
import patientatorRouter from './routes/routes';
app.use(express.json());

const PORT = 3003;

//route for diagnoses
app.use('/api/diagnoses', patientatorRouter);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
