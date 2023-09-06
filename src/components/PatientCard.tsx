import { useNavigate } from 'react-router-dom';
import {
    useSelectContext,
    useSelectedPatientsContext,
} from '../contexts/SelectContext';
import { IPatientContact } from '../types/types';
import Avatar from './Avatar';
import Checkbox from './Checkbox';
import NotificationBadge from './NotificationBadge';
import { pagesPathConfig } from '../configs/configs';
import { SyntheticEvent } from 'react';

interface IPatientCard extends IPatientContact {
    isActiveLink: boolean;
}

function PatientCard({
    name,
    avatar,
    isMessage,
    id,
    isActiveLink,
    isNotification,
}: IPatientCard) {
    const navigate = useNavigate();

    const { selectIsActive } = useSelectContext();

    const { selectedPatients, togglePatientSelect } =
        useSelectedPatientsContext();

    const isChecked = selectedPatients.includes(id);

    const handleRedirect = (): void =>
        navigate(pagesPathConfig.getProfilePagePath(id));

    const handlePatientSelect = (): void => togglePatientSelect(id);

    return (
        <div
            className={`
                patient-card
                ${isActiveLink ? 'patient-card_state_active' : ''}
                ${isMessage ? 'patient-card_state_message' : ''}
                ${selectIsActive ? 'patient-card_state_select' : ''}
            `}
            onClick={handleRedirect}
        >
            {selectIsActive && (
                <Checkbox
                    isChecked={isChecked}
                    handleChange={handlePatientSelect}
                    handleClick={(evt: SyntheticEvent) => evt.stopPropagation()}
                />
            )}
            <div className="patient-card__wrapper">
                <div className="patient-card__patient-info">
                    <Avatar size="small" src={avatar} />
                    <h3 className="patient-card__name">{name}</h3>
                </div>
                {isMessage && <NotificationBadge type="message" />}
                {isNotification && <NotificationBadge type="notification" />}
            </div>
        </div>
    );
}

export default PatientCard;
