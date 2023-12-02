import React from 'react';

import { Typography, Box } from '@mui/material';

import logo from '../../images/logo.svg';
import { ApiResponse, CurrencyTypes } from 'types/currencyTypes';

import styles from './header.module.scss';

export const Header: React.FC<{ currencyRates?: ApiResponse }> = ({ currencyRates }) => {
    return (
        <header className={styles.header}>
            <Box className={styles.header_wrapper}>
                <Box className={styles.logo_wrapper}>
                    <img src={logo} alt='logo' width={40} />
                    <Typography className={styles.header__text}>
                        Currency Exchange Rates
                    </Typography>
                </Box>
                {currencyRates ?
                    <Box className={styles.rates_wrapper}>
                        <Typography>
                            {CurrencyTypes.eur}:&nbsp;
                            {Math.round(currencyRates[CurrencyTypes.eur].value * 100) / 100}
                        </Typography>
                        <Typography>
                            {CurrencyTypes.uah}:&nbsp;
                            {Math.round(currencyRates[CurrencyTypes.uah].value * 100) / 100}
                        </Typography>
                    </Box>
                    : null
                }
            </Box>
        </header>
    )
};
