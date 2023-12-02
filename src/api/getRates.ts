import axios from 'axios';

export const getRates = async () => {
    try {
        const result = await axios.get(process.env.REACT_APP_API_URL!, {
            params: {
                apikey: process.env.REACT_APP_ACCESS_KEY,
                currencies: ['USD', 'EUR', 'UAH'],
            },
        });
        return result.data;
    } catch (error: any) {
        console.log(error.message);
    }
};
