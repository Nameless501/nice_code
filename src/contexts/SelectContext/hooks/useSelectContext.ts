import { useContext } from 'react';
import SelectContext from '../context/SelectContext';
import { SelectContextType } from '../types/types';

export const useSelectContext = (): SelectContextType => {
    const contextValue = useContext(SelectContext);
    return { ...(contextValue as SelectContextType) };
};
