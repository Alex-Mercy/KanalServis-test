import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/Alex-Mercy/kanalServis-server/orders'

export const getData = async () => {
    return await axios.get(`${baseUrl}?_page=1`);
};