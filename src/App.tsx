import React, { useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { Header } from 'components/header/Header';
import { Footer } from 'components/footer/Footer';
import { Rates } from 'components/rates/Rates';

import { getRates } from 'api/getRates';
import { ApiResponse } from 'types/currencyTypes';

import styles from './app.module.scss';

const App: React.FC = () => {

    const [currencyRates, setCurrencyRates] = useState<ApiResponse>();

    useEffect(() => {
        getRates().then(result => setCurrencyRates(result?.data));
    }, []);

    return (
        <Box className={styles.app}>
            <Header currencyRates={currencyRates} />
            <main className={styles.main}>
                <Rates currencyRates={currencyRates} />
            </main>
            <Footer />
        </Box>
    );
}

export default App;
