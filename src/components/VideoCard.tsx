import { IVideo } from '../types/types';
import { getFormattedDate } from '../utils/utils';

function VideoCard({ startTime, endTime, title, author, image }: IVideo) {
    return (
        <article className="video-card">
            <div className="video-card__info-wrapper">
                <img
                    src={image}
                    alt="Превью видео"
                    className="video-card__image"
                />
                <div className="video-card__info">
                    <h3 className="video-card__title">{title}</h3>
                    <p className="video-card__author">{author}</p>
                </div>
            </div>
            {startTime && endTime && (
                <span className="video-card__time">
                    {`${getFormattedDate(startTime)}-${getFormattedDate(
                        endTime
                    )}`}
                </span>
            )}
        </article>
    );
}

export default VideoCard;
