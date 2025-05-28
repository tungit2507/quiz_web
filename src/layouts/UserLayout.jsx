import { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';

import { Outlet } from 'react-router';

const UserLayout = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </Fragment>
    );
}

export default UserLayout;