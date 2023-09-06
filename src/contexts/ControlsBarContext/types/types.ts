export enum ControlBarVariants {
    search = 'search',
    default = 'default',
}

export type ControlsBarContextType = {
    variant: ControlBarVariants;
    openSearchBar: () => void;
    closeSearchBar: () => void;
};
