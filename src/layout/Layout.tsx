import { ReactNode } from 'react';
import Header from './Header';

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="page">
            <Header />
            <main className="page__content">{children}</main>
        </div>
    );
}

export default Layout;
