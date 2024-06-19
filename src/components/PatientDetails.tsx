import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Patient } from '../types';
import patientService from '../services/patients';
import { Box, Typography, Card, CardContent, CircularProgress } from '@mui/material';
const PatientDetails = () => {
    const { id='' } = useParams<{ id: string }>();
    const [patient, setPatient] = useState<Patient | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasId, setHasId] = useState<boolean>(false);
  
    useEffect(() => {
      if (id) {
        setHasId(true);
      }
    }, [id]);
  
    useEffect(() => {
      if (hasId) {
        const fetchPatient = async () => {
          try {
            console.log('Fetching patient with ID:', id);
            const data: Patient = await patientService.getPatientById(id);
            setPatient(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching patient data:', error);
            setLoading(false);
          }
        };
        fetchPatient();
      }
    }, [hasId, id]);
  
    if (loading) {
      return <CircularProgress />;
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
            <Typography variant="h5">{patient.name}</Typography>
            <Typography>Gender: {patient.gender}</Typography>
            <Typography>Occupation: {patient.occupation}</Typography>
            {/* Add more patient details here */}
          </CardContent>
        </Card>
      </Box>
    );
  };

export default PatientDetails
