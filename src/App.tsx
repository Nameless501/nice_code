import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ProfilePage from './pages/ProfilePage';
import MainPage from './pages/MainPage';
import { routesConfig } from './configs/configs';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path={routesConfig.main} element={<MainPage />} />
                <Route path={routesConfig.profile} element={<ProfilePage />} />
            </Routes>
        </Layout>
    );
}

export default App;
