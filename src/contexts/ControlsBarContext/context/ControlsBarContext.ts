import { createContext } from 'react';
import { ControlsBarContextType } from '../types/types';

const ControlsBarContext = createContext<ControlsBarContextType | null>(null);

export default ControlsBarContext;
