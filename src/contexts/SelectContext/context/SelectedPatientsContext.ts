import { createContext } from 'react';
import { SelectedPatientsContextType } from '../types/types';

const SelectedPatientsContext =
    createContext<SelectedPatientsContextType | null>(null);

export default SelectedPatientsContext;
