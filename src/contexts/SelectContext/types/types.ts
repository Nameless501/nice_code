export type SelectContextType = {
    selectIsActive: boolean;
    toggleSelectState: () => void;
};

export type SelectedPatientsContextType = {
    selectedPatients: number[];
    togglePatientSelect: (id: number) => void;
    selectAllPatients: (patients: number[]) => void;
    unselectAllPatients: () => void;
};
