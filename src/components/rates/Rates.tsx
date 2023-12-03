import React, { useState } from 'react';
import { Paper, Typography, Box, Input } from '@mui/material';

import { SelectInput } from 'components/inputs/SelectInput';
import { ApiResponse, CurrencyTypes } from 'types/currencyTypes';

import styles from './rates.module.scss';

export const Rates: React.FC<{ currencyRates?: ApiResponse }> = ({ currencyRates }) => {

    const getRatio = (currency: CurrencyTypes) => {
        let ratio;
        switch (currency) {
            case CurrencyTypes.uah: ratio = currencyRates ? currencyRates[CurrencyTypes.uah].value : 0;
                break;
            case CurrencyTypes.eur: ratio = currencyRates ? currencyRates[CurrencyTypes.eur].value : 0;
                break;
            case CurrencyTypes.usd: ratio = 1;
                break;
            default: ratio = 1
                break;
        }
        return ratio;
    };

    const [valueOne, setValueOne] = useState<number | null>();
    const [valueTwo, setValueTwo] = useState<number | null>();
    const [currencyOne, setCurrencyOne] = useState(CurrencyTypes.uah);
    const [currencyTwo, setCurrencyTwo] = useState(CurrencyTypes.usd);

    const handleTextFieldOne = (e: { currentTarget: { value: any; }; }) => {
        const value = e.currentTarget.value;
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);

        setValueOne(value);
        setValueTwo(Math.round(value / ratioOne * ratioTwo * 100) / 100);
    };

    const handleTextFieldTwo = (e: { currentTarget: { value: any; }; }) => {
        const value = e.currentTarget.value;
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);

        setValueTwo(value);
        setValueOne(Math.round(value * ratioOne / ratioTwo * 100) / 100);
    };

    const handleSelectOne = (currency: CurrencyTypes) => {
        setCurrencyOne(currency);
        const ratioOne = getRatio(currency);
        const ratioTwo = getRatio(currencyTwo);
        setValueTwo(valueOne ? Math.round(valueOne / ratioOne * ratioTwo * 100) / 100 : null);
    };

    const handleSelectTwo = (currency: CurrencyTypes) => {
        setCurrencyTwo(currency);
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currency);
        setValueOne(valueTwo ? Math.round(valueTwo * ratioOne / ratioTwo * 100) / 100 : null);
    };

    return (
        <article className={styles.rates}>
            <Paper className={styles.rates_wrapper}>
                <Typography>Change:</Typography>
                <Box className={styles.input_box}>
                    <Input
                        type='number'
                        placeholder="Put amount..."
                        sx={{ width: '100%', mt: 2 }}
                        onChange={handleTextFieldOne}
                        value={valueOne}
                    />
                    <SelectInput 
                        currency={currencyOne} 
                        setCurrency={handleSelectOne} 
                    />
                </Box>
                <Typography>To</Typography>
                <Box className={styles.input_box}>
                    <Input
                        type='number'
                        placeholder="Put amount..."
                        sx={{ width: '100%', mt: 2 }}
                        onChange={handleTextFieldTwo}
                        value={valueTwo}

                    />
                    <SelectInput 
                        currency={currencyTwo} 
                        setCurrency={handleSelectTwo} 
                    />
                </Box>
            </Paper>
        </article>
    );
};
