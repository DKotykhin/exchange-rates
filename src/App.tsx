import React from 'react';

import { Box } from '@mui/material';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Rates } from 'components/rates/Rates';

import styles from './app.module.scss';

const App: React.FC = () => {

    return (
        <Box className={styles.app}>
            <Header />
            <main className={styles.main}>
                <Rates />
            </main>
            <Footer />
        </Box>
    );
}

export default App;
