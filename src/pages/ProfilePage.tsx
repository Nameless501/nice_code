import { useParams } from 'react-router-dom';
import PatientProfile from '../components/PatientProfile';
import SideBar from '../components/SideBar';

function ProfilePage() {
    const { userId } = useParams();

    return (
        <>
            <SideBar userId={Number(userId)} />
            <PatientProfile userId={Number(userId)} />
        </>
    );
}

export default ProfilePage;
