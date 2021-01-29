import React, { FC } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../organisms/Footer/Footer';

const MainTemplate: FC = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainTemplate;
