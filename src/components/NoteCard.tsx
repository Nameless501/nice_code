import DropDown from './DropDown';
import { IPatientNote } from '../types/types';
import { getFormattedDate } from '../utils/utils';

function NoteCard({ text, date, image }: IPatientNote) {
    return (
        <article className="note-card">
            <div className="note-card__content">
                <div className="note-card__text">
                    <span className="note-card__date">
                        {getFormattedDate(date)}
                    </span>
                    &nbsp;{text}
                </div>
                {image && (
                    <img
                        src={image}
                        alt="Картинка заметки"
                        className="note-card__image"
                    />
                )}
            </div>
            <DropDown />
        </article>
    );
}

export default NoteCard;
