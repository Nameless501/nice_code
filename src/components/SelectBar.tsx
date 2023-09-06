import {
    useSelectContext,
    useSelectedPatientsContext,
} from '../contexts/SelectContext';
import { IPatientContact } from '../types/types';
import Checkbox from './Checkbox';
import CountBadge from './CountBadge';
import MainButton from './MainButton';

interface ISelectBar {
    patientsList: IPatientContact[];
}

function SelectBar({ patientsList }: ISelectBar) {
    const { selectIsActive, toggleSelectState } = useSelectContext();

    const { selectedPatients, selectAllPatients, unselectAllPatients } =
        useSelectedPatientsContext();

    const allPatientsSelected = selectedPatients.length === patientsList.length;

    const toggleAllPatientsSelect = () => {
        if (allPatientsSelected) {
            unselectAllPatients();
        } else {
            selectAllPatients(patientsList.map(({ id }) => id));
        }
    };

    return (
        <section
            className={`
                select-bar
                ${selectIsActive ? 'select-bar_active' : ''}
            `}
        >
            <div className="select-bar__group-left">
                {selectIsActive && (
                    <Checkbox
                        isChecked={allPatientsSelected}
                        handleChange={toggleAllPatientsSelect}
                        label="Все"
                    />
                )}
                <CountBadge
                    count={
                        selectIsActive
                            ? selectedPatients.length
                            : patientsList.length
                    }
                    isActive={selectIsActive}
                />
            </div>
            <div className="select-bar__group-right">
                {selectIsActive ? (
                    <>
                        <MainButton text="Действия" />
                        <MainButton
                            text="Отменить"
                            handleClick={toggleSelectState}
                        />
                    </>
                ) : (
                    <MainButton
                        text="Выбрать"
                        handleClick={toggleSelectState}
                    />
                )}
            </div>
        </section>
    );
}

export default SelectBar;
