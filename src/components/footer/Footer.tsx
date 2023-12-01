import React from 'react';

import { Box, Link, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import styles from './footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Box className={styles.footer_wrapper}>
                <Typography className={styles.footer__text}>
                    Copyright &copy; 2023 Dmytro Kotykhin
                </Typography>
                <Link href="https://github.com/DKotykhin" target="_blank">
                    <Tooltip title="Github">
                        <GitHubIcon sx={{ color: '#fff' }} />
                    </Tooltip>
                </Link>
                <Link href="https://dmytro-kotykhin.space" target="_blank">
                    <Tooltip title="Portfolio">
                        <LanguageIcon sx={{ color: '#fff' }} />
                    </Tooltip>
                </Link>
            </Box>
        </footer>
    )
}
