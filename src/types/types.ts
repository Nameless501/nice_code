export interface IPatientContact {
    id: number;
    name: string;
    avatar: string | null;
    isMessage: boolean;
    isNotification: boolean;
}

export interface IPatientNote {
    id: number;
    date: string;
    text: string;
    image: string | null;
}

export interface IConsultation {
    id: number;
    type: 'personal' | 'online';
    startTime: string;
    endTime: string;
    isApproved: boolean;
}

export interface IVideo {
    id: number;
    title: string;
    author: string;
    startTime: string | null;
    endTime: string | null;
    image: string;
}

export interface IEvent {
    id: number;
    title: string;
    type: 'personal' | 'online';
    startTime: string;
    image: string;
}

export interface IPatientData {
    id: number;
    name: string;
    avatar: string | null;
    age: number;
    gender: 'male' | 'female';
    notes: IPatientNote[];
    consultations: IConsultation[];
    videos: IVideo[];
    events: IEvent[];
}

export enum PatientFeedTabs {
    notes = 'notes',
    consultations = 'consultations',
    videos = 'videos',
    events = 'events',
}
