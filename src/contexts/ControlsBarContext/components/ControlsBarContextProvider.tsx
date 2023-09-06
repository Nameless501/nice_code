import { ReactNode, useState } from 'react';
import ControlsBarContext from '../context/ControlsBarContext';
import { ControlBarVariants } from '../types/types';

export function ControlsBarContextProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [variant, setVariant] = useState<ControlBarVariants>(
        ControlBarVariants.default
    );

    const openSearchBar = (): void => setVariant(ControlBarVariants.search);

    const closeSearchBar = (): void => setVariant(ControlBarVariants.default);

    return (
        <ControlsBarContext.Provider
            value={{ variant, openSearchBar, closeSearchBar }}
        >
            {children}
        </ControlsBarContext.Provider>
    );
}
