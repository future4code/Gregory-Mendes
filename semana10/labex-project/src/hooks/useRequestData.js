import { useState, useEffect } from 'react';
import { getDataFromApi } from '../services/requests/getDataFromApi';

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        getDataFromApi(url, setData);
    }, [url]);

    const updateData = () => {
        getDataFromApi(url, setData);
    };

    return [data, updateData];
};

export default useRequestData;
