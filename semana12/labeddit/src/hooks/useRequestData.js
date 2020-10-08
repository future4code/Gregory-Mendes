import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/urls';

const useRequestData = (initialState, endpoint) => {
    const [data, setData] = useState(initialState);
    
    useEffect(() => {
        axios.get(`${BASE_URL}${endpoint}`, {
            headers: {
                Authorization: localStorage.getItem("token")
        }})
        .then((response) => {
            console.log(response.data)
            setData(response.data.posts);
        })
        .catch((error) => {
            console.log("Ocorreu um erro na página. Tente novamente.");
        });
    }, [endpoint]);

    return data;
};

export default useRequestData;