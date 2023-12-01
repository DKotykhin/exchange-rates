import React from 'react';

import { Typography, Box } from '@mui/material';
import logo from '../../images/logo.svg';

import styles from './header.module.scss';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Box className={styles.header_wrapper}>
                <img src={logo} alt='logo' width={40} />
                <Typography className={styles.header__text}>
                    Currency Exchange Rates
                </Typography>
            </Box>
        </header>
    )
};
