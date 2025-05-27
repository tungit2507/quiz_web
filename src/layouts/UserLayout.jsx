import { Fragment } from 'react';
import Header from '../components/Header';

import { Outlet } from 'react-router';

const UserLayout = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
}

export default UserLayout;