import axios from 'axios';
import { Patient, PatientFormValues } from '../types';

import { apiBaseUrl } from '../constants';

const getAll = async () => {
	const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patient`);

	return data;
};

const getPatientById = async (id: string) => {
	console.log('Get patient by id', id);
	const { data } = await axios.get<Patient>(`${apiBaseUrl}/patient/${id}`);
	if (data) {
		console.log(data);
	} else {
		console.log(`${apiBaseUrl}/patient/${id}`);
		console.log('Error in fetching data');
	}
	return data;
};

const create = async (object: PatientFormValues) => {
	const { data } = await axios.post<Patient>(`${apiBaseUrl}/patient`, object);

	return data;
};

export default {
	getAll,
	create,
	getPatientById,
};
