import PatientCard from './PatientCard';
import { IPatientContact } from '../types/types';

interface IPatientsList {
    patientsList: IPatientContact[];
    userId?: number;
}

function PatientsList({ patientsList, userId }: IPatientsList) {
    return (
        <ul className="patients-list">
            {patientsList.map((patient) => (
                <li key={patient.id}>
                    <PatientCard
                        {...patient}
                        isActiveLink={userId === patient.id}
                    />
                </li>
            ))}
        </ul>
    );
}

export default PatientsList;
