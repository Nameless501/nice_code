import { useCallback, useEffect, useState } from 'react';
import PatientInfo from './PatientInfo';
import PatientFeed from './PatientFeed';
import ProfileControls from './ProfileControls';
import { IPatientData, PatientFeedTabs } from '../types/types';
import { apiRoutes } from '../configs/configs';

interface IPatientProfile {
    userId: number;
}

function PatientProfile({ userId }: IPatientProfile) {
    const [currentTab, setCurrentTab] = useState<PatientFeedTabs>(
        PatientFeedTabs.notes
    );

    const [currentPatientData, setCurrentPatientData] =
        useState<IPatientData | null>(null);

    const fetchPatientsData = useCallback(async (id: number): Promise<void> => {
        try {
            const res = await fetch(apiRoutes.patientDataUrl);
            const data: IPatientData[] = await res.json();
            const currentData = data.find((patient) => id === patient.id);
            if (currentData) setCurrentPatientData(currentData);
        } catch (err) {
            console.log(err);
        }
    }, []);

    useEffect(() => {
        fetchPatientsData(userId);
    }, [fetchPatientsData, userId]);

    const handleTabChange = (tab: PatientFeedTabs): void => setCurrentTab(tab);

    return (
        <section className="patient-profile">
            {currentPatientData && (
                <>
                    <PatientInfo {...currentPatientData} />
                    <ProfileControls
                        currentTab={currentTab}
                        handleTabChange={handleTabChange}
                    />
                    <PatientFeed
                        {...currentPatientData}
                        currentTab={currentTab}
                    />
                </>
            )}
        </section>
    );
}

export default PatientProfile;
