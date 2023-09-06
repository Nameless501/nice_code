import { ReactNode, useState } from 'react';
import SelectContext from '../context/SelectContext';
import SelectedPatientsContext from '../../SelectContext/context/SelectedPatientsContext';

export function SelectContextProvider({ children }: { children: ReactNode }) {
    const [selectIsActive, setSelectState] = useState<boolean>(false);

    const [selectedPatients, setSelectedPatients] = useState<number[]>([]);

    const togglePatientSelect = (id: number): void =>
        setSelectedPatients((cur) =>
            cur.includes(id) ? cur.filter((el) => el !== id) : [...cur, id]
        );

    const toggleSelectState = (): void => setSelectState((cur) => !cur);

    const selectAllPatients = (patients: number[]): void =>
        setSelectedPatients(patients);

    const unselectAllPatients = (): void => setSelectedPatients([]);

    return (
        <SelectContext.Provider value={{ selectIsActive, toggleSelectState }}>
            <SelectedPatientsContext.Provider
                value={{
                    selectedPatients,
                    togglePatientSelect,
                    selectAllPatients,
                    unselectAllPatients,
                }}
            >
                {children}
            </SelectedPatientsContext.Provider>
        </SelectContext.Provider>
    );
}
