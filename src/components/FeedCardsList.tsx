import { IConsultation, IEvent, IPatientNote, IVideo } from '../types/types';

interface IFeedCardsList<T> {
    renderCard: (props: unknown) => JSX.Element;
    list: T[];
    place?: string;
}

type FeedCardsListProps =
    | IFeedCardsList<IPatientNote>
    | IFeedCardsList<IConsultation>
    | IFeedCardsList<IVideo>
    | IFeedCardsList<IEvent>;

function FeedCardsList({ renderCard, list, place }: FeedCardsListProps) {
    return (
        <ul
            className={`
                feed-cards-list
                ${place ? 'feed-cards-list_place_' + place : ''}
            `}
        >
            {list.map((note) => (
                <li key={note.id}>{renderCard(note)}</li>
            ))}
        </ul>
    );
}

export default FeedCardsList;
