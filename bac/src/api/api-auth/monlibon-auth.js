import axios from "axios";
import qs from "node:querystring";

export const monlibonAuth = async () => {
    const {data} = await axios.post('https://www.ml-auto.by/webservice/ShowInfo/', qs.stringify({
        LOGIN: 'WEB-E-049468',
        PASSWORD: 'rm4m#yZfMBrb'
    }));
    console.log(qs.stringify({
        LOGIN: 'WEB-E-049468',
        PASSWORD: 'rm4m#yZfMBrb'
    }));
    return data;
}