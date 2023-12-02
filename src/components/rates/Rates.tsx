import React, { useState, useEffect } from 'react';
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
    }

    const [valueOne, setValueOne] = useState<number | null>();
    const [valueTwo, setValueTwo] = useState<number | null>();
    const [currencyOne, setCurrencyOne] = useState(CurrencyTypes.uah);
    const [currencyTwo, setCurrencyTwo] = useState(CurrencyTypes.usd);

    useEffect(() => {
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);
        setValueTwo(valueOne ? valueOne / ratioOne * ratioTwo : null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currencyOne]);

    useEffect(() => {
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);
        setValueOne(valueTwo ? valueTwo * ratioOne / ratioTwo : null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currencyTwo]);

    const textFieldOne = (e: { currentTarget: { value: any; }; }) => {
        const value = e.currentTarget.value;
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);

        setValueOne(value);
        setValueTwo(value / ratioOne * ratioTwo);
    }

    const textFieldTwo = (e: { currentTarget: { value: any; }; }) => {
        const value = e.currentTarget.value;
        const ratioOne = getRatio(currencyOne);
        const ratioTwo = getRatio(currencyTwo);

        setValueTwo(value);
        setValueOne(value * ratioOne / ratioTwo);
    }

    return (
        <article className={styles.rates}>
            <Paper className={styles.rates_wrapper}>
                <Typography>Change:</Typography>
                <Box className={styles.input_box}>
                    <Input
                        type='number'
                        placeholder="Put amount..."
                        sx={{ width: '100%', mt: 2 }}
                        onChange={textFieldOne}
                        value={valueOne}
                    />
                    <SelectInput 
                        currency={currencyOne} 
                        setCurrency={(c: CurrencyTypes) => setCurrencyOne(c)} 
                    />
                </Box>
                <Typography>To</Typography>
                <Box className={styles.input_box}>
                    <Input
                        type='number'
                        placeholder="Put amount..."
                        sx={{ width: '100%', mt: 2 }}
                        onChange={textFieldTwo}
                        value={valueTwo}

                    />
                    <SelectInput 
                        currency={currencyTwo} 
                        setCurrency={(c: CurrencyTypes) => setCurrencyTwo(c)} 
                    />
                </Box>
            </Paper>
        </article>
    );
};
