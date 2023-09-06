import { createContext } from 'react';
import { SortContextType } from '../types/types';

const SortContext = createContext<SortContextType | null>(null);

export default SortContext;
