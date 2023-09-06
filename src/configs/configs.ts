import { PatientFeedTabs } from '../types/types';

export const routesConfig = {
    main: '/',
    profile: '/profile/:userId',
};

export const pagesPathConfig = {
    getMainPagePath: (): string => '/',
    getProfilePagePath: (userId: number): string => `/profile/${userId}`,
};

export const patientFeedTabs = [
    {
        title: 'Заметки',
        value: PatientFeedTabs.notes,
    },
    {
        title: 'Консультации',
        value: PatientFeedTabs.consultations,
    },
    {
        title: 'Видео',
        value: PatientFeedTabs.videos,
    },
    {
        title: 'Мероприятия',
        value: PatientFeedTabs.events,
    },
];

export const newFeedItemButtonConfig = {
    [PatientFeedTabs.notes]: 'Новая заметка',
    [PatientFeedTabs.consultations]: 'Записать',
    [PatientFeedTabs.videos]: 'Рекомендовать',
    [PatientFeedTabs.events]: 'Рекомендовать',
};

export const apiRoutes = {
    contactsUrl: 'https://nameless501.github.io/nice_code/api/patientsContacts.json',
    patientDataUrl: 'https://nameless501.github.io/nice_code/api/patientsData.json',
};

export const agePluralsConfig = {
    zero: 'лет',
    two: 'года',
    one: 'год',
    few: 'года',
    many: 'лет',
    other: 'лет',
};
