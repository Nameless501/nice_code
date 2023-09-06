import { useContext } from 'react';
import SortContext from '../context/SortContext';
import { SortContextType } from '../types/types';

export const useSortContext = (): SortContextType => {
    const contextValue = useContext(SortContext);
    return { ...(contextValue as SortContextType) };
};
