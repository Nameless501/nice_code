import { useCallback, useEffect, useMemo, useState } from 'react';
import { SelectContextProvider } from '../contexts/SelectContext';
import {
    useSearchContext,
    useSortContext,
    SortDirections,
} from '../contexts/FiltersContext';
import PatientsList from './PatientsList';
import SelectBar from './SelectBar';
import { IPatientContact } from '../types/types';
import { apiRoutes } from '../configs/configs';

interface IPatientsContacts {
    userId?: number;
}

function PatientsContacts({ userId }: IPatientsContacts) {
    const [patientsList, setPatientsList] = useState<IPatientContact[]>([]);

    const { searchQuery } = useSearchContext();

    const { sortDirection } = useSortContext();

    const filteredPatientsList = useMemo(() => {
        const result = patientsList.filter(({ name }) =>
            name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (sortDirection) {
            result.sort((a, b) =>
                sortDirection === SortDirections.ascending
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );
        }
        return result;
    }, [searchQuery, sortDirection, patientsList]);

    const fetchPatients = useCallback(async (): Promise<void> => {
        try {
            const res = await fetch(apiRoutes.contactsUrl);
            const data = await res.json();
            setPatientsList(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchPatients();
    }, [fetchPatients]);

    return (
        <SelectContextProvider>
            <SelectBar patientsList={filteredPatientsList} />
            <PatientsList patientsList={filteredPatientsList} userId={userId} />
        </SelectContextProvider>
    );
}

export default PatientsContacts;
