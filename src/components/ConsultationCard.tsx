import { useState } from 'react';
import { IConsultation } from '../types/types';
import { getFormattedDate, getFormattedTime } from '../utils/utils';
import CameraIcon from './CameraIcon';
import CommunicationIcon from './CommunicationIcon';

function ConsultationCard({
    startTime,
    endTime,
    isApproved,
    type,
}: IConsultation) {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <article
            className={`
                consultation-card
                ${isActive ? 'consultation-card_active' : ''}
            `}
            onClick={() => setIsActive((cur) => !cur)}
        >
            <div className="consultation-card__info-wrapper">
                <span
                    className={`
                        consultation-card__icon
                        ${isActive ? 'consultation-card__icon_active' : ''}
                    `}
                >
                    {type === 'online' && <CameraIcon isHover={isActive} />}
                    {type === 'personal' && (
                        <CommunicationIcon isHover={isActive} />
                    )}
                </span>
                <div className="consultation-card__info">
                    <h3 className="consultation-card__type">
                        {type === 'online' && 'Online консультация'}
                        {type === 'personal' && 'Личный приём'}
                    </h3>
                    <p className="consultation-card__time">
                        {`${getFormattedDate(startTime)}, ${getFormattedTime(
                            startTime
                        )}-${getFormattedTime(endTime)}`}
                    </p>
                </div>
            </div>
            {!isApproved && (
                <span className="consultation-card__approval">
                    Не подтверждена
                </span>
            )}
        </article>
    );
}

export default ConsultationCard;
