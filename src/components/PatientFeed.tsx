import FeedCardsList from './FeedCardsList';
import NoteCard from './NoteCard';
import ConsultationCard from './ConsultationCard';
import VideoCard from './VideoCard';
import EventCard from './EventCard';
import {
    IConsultation,
    IEvent,
    IPatientData,
    IPatientNote,
    IVideo,
    PatientFeedTabs,
} from '../types/types';

interface IPatientFeed extends IPatientData {
    currentTab: PatientFeedTabs;
}

function PatientFeed({
    consultations,
    notes,
    videos,
    events,
    currentTab,
}: IPatientFeed) {
    return (
        <section className="patient-feed">
            {currentTab === PatientFeedTabs.notes && (
                <FeedCardsList
                    list={notes}
                    renderCard={(props) => (
                        <NoteCard {...(props as IPatientNote)} />
                    )}
                    place="notes"
                />
            )}
            {currentTab === PatientFeedTabs.consultations && (
                <FeedCardsList
                    list={consultations}
                    renderCard={(props) => (
                        <ConsultationCard {...(props as IConsultation)} />
                    )}
                />
            )}
            {currentTab === PatientFeedTabs.videos && (
                <FeedCardsList
                    list={videos}
                    renderCard={(props) => <VideoCard {...(props as IVideo)} />}
                />
            )}
            {currentTab === PatientFeedTabs.events && (
                <FeedCardsList
                    list={events}
                    renderCard={(props) => <EventCard {...(props as IEvent)} />}
                />
            )}
        </section>
    );
}

export default PatientFeed;
