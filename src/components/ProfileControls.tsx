import { Fragment } from 'react';
import MainButton from './MainButton';
import NewFeedItemButton from './NewFeedItemButton';
import { PatientFeedTabs } from '../types/types';
import { patientFeedTabs } from '../configs/configs';

interface IProfileControls {
    currentTab: PatientFeedTabs;
    handleTabChange: (tab: PatientFeedTabs) => void;
}

function ProfileControls({ currentTab, handleTabChange }: IProfileControls) {
    return (
        <section className="profile-controls">
            <div className="profile-controls__buttons-group">
                {patientFeedTabs.map(({ title, value }, ind) => (
                    <Fragment key={ind}>
                        <MainButton
                            text={title}
                            handleClick={() => handleTabChange(value)}
                            isActive={value === currentTab}
                        />
                        {ind !== patientFeedTabs.length - 1 && (
                            <span className="profile-controls__divider" />
                        )}
                    </Fragment>
                ))}
            </div>
            <NewFeedItemButton currentTab={currentTab} />
        </section>
    );
}

export default ProfileControls;
