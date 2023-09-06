import { useContext } from 'react';
import ControlsBarContext from '../context/ControlsBarContext';
import { ControlsBarContextType } from '../types/types';

export const useControlsBarContext = (): ControlsBarContextType => {
    const contextValue = useContext(ControlsBarContext);
    return { ...(contextValue as ControlsBarContextType) };
};
