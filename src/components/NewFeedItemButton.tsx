import { newFeedItemButtonConfig } from '../configs/configs';
import { PatientFeedTabs } from '../types/types';

interface INewFeedItemButton {
    currentTab: PatientFeedTabs;
}

function NewFeedItemButton({ currentTab }: INewFeedItemButton) {
    return (
        <button className="new-feed-item-button">
            <span className="new-feed-item-button__text">
                {newFeedItemButtonConfig[currentTab]}
            </span>
            <span className="new-feed-item-button__icon" />
        </button>
    );
}

export default NewFeedItemButton;
