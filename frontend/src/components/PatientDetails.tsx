import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Patient } from '../types';
import patientService from '../services/patients';
import { Box, Typography, Card, CardContent, CircularProgress, Alert } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

const PatientDetails = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPatient = async (id: string) => {
      setLoading(true); 
      setError(null); 
      try {
        if (id) {
          console.log('Fetching patient with ID:', id);
          const data: Patient = await patientService.getPatientById(id);
          setPatient(data);
        } else {
          setPatient(null); 
        }
      } catch (error) {
        console.error('Error fetching patient data:', error);
        setError('Failed to fetch patient data. Please try again later.');
      } finally {
        setLoading(false); 
      }
    };

    fetchPatient(id);
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <Box>
        <Card>
          <CardContent>
            <Alert severity="error">{error}</Alert>
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (!patient) {
    console.log('Patient not found');
    return (
      <Box>
        <Card>
          <CardContent>
            <Typography variant="h5">Patient not found</Typography>
            <Typography>Please check the patient ID and try again.</Typography>
          </CardContent>
        </Card>
      </Box>
    );
  }

  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" fontFamily={"Times New Roman"} fontWeight={'bold'} fontSize={'150%'}>{patient.name}
          {patient.gender === "female" ? <FemaleIcon fontSize='large'></FemaleIcon> : <MaleIcon fontSize='large'></MaleIcon>}</Typography>
          <Typography>ssn: {patient.ssn}</Typography>
          <Typography>Occupation: {patient.occupation}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PatientDetails;
