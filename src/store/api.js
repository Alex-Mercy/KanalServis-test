import axios from 'axios';

const baseUrl = 'https://my-json-server.typicode.com/Alex-Mercy/kanalServis-server/orders'


export const getData = async (currentPage, perPage, sortBy, isAscOrder, filter, searchValue) => {
    const filterText = filter === 'equal' ? '='
        : filter === 'includes' ? '_like='
            : filter === 'less' ? '_lte='
                : filter === 'more' ? '_gte='
                    : ''
        ;
           
    return await axios.get(
        `${baseUrl}?_page=${currentPage}&_limit=${perPage}&_sort=${sortBy}&_order=${isAscOrder 
            ? `asc` 
            : `desc`}${searchValue !== ''
            ? `&${sortBy}${filterText}${searchValue}`
            : ''}`);
};