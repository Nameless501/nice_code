import { IEvent } from '../types/types';
import { getFormattedDate, getFormattedTime } from '../utils/utils';

function EventCard({ startTime, title, type, image }: IEvent) {
    return (
        <article className="event-card">
            <div className="event-card__info-wrapper">
                <img
                    src={image}
                    alt="Превью мероприятия"
                    className="event-card__image"
                />
                <div className="event-card__info">
                    <h3 className="event-card__title">{title}</h3>
                    <div className="event-card__props">
                        <div className="event-card__prop">
                            <span className="event-card__prop-icon event-card__prop-icon_type_format" />
                            <p className="event-card__prop-text">
                                {type === 'online' && 'Вебинар'}
                            </p>
                        </div>
                        <div className="event-card__prop">
                            <span className="event-card__prop-icon event-card__prop-icon_type_date" />
                            <p className="event-card__prop-text">
                                {getFormattedDate(startTime, {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>
                        <div className="event-card__prop">
                            <span className="event-card__prop-icon event-card__prop-icon_type_time" />
                            <p className="event-card__prop-text">
                                {getFormattedTime(startTime)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default EventCard;
