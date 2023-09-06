import { useContext } from 'react';
import SelectedPatientsContext from '../context/SelectedPatientsContext';
import { SelectedPatientsContextType } from '../types/types';

export const useSelectedPatientsContext = (): SelectedPatientsContextType => {
    const contextValue = useContext(SelectedPatientsContext);
    return { ...(contextValue as SelectedPatientsContextType) };
};
