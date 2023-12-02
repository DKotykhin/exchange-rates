export enum CurrencyTypes {
    'uah' = 'UAH',
    'eur' = 'EUR',
    'usd' = 'USD',
}

export interface ApiResponse {
    [key: string]: {
        code: string;
        value: number;
    };
}
