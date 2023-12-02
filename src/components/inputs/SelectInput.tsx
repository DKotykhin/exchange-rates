import React from 'react';

import { Box, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

import { CurrencyTypes } from 'types/currencyTypes';

import styles from './selectInput.module.scss';

interface ISelectInput {
    currency: string,
    setCurrency: (arg0: CurrencyTypes) => void,
}

export const SelectInput: React.FC<ISelectInput> = ({ currency, setCurrency }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setCurrency(event.target.value as CurrencyTypes);
    };

    return (
        <Box className={styles.select_input}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Currency</InputLabel>
                <Select
                    labelId="select-label"
                    value={currency}
                    label="Currency"
                    onChange={handleChange}
                    variant='standard'
                >
                    <MenuItem value={CurrencyTypes.uah}>{CurrencyTypes.uah}</MenuItem>
                    <MenuItem value={CurrencyTypes.eur}>{CurrencyTypes.eur}</MenuItem>
                    <MenuItem value={CurrencyTypes.usd}>{CurrencyTypes.usd}</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}