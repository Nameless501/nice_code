import { ControlsBarContextProvider } from '../contexts/ControlsBarContext';
import { FiltersContextProvider } from '../contexts/FiltersContext';
import ControlsBar from './ControlsBar';
import PatientsContacts from './PatientsContacts';

interface ISideBar {
    userId?: number;
}

function SideBar({ userId }: ISideBar) {
    return (
        <section className="sidebar">
            <FiltersContextProvider>
                <ControlsBarContextProvider>
                    <ControlsBar />
                </ControlsBarContextProvider>
                <PatientsContacts userId={userId} />
            </FiltersContextProvider>
        </section>
    );
}

export default SideBar;
