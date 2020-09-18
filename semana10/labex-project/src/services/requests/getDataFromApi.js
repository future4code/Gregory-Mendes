import axios from 'axios';

export const getDataFromApi = (url, setData) => {
    axios.get(url)
    .then((response) => {
        setData(response.data)
    })
    .catch((error) => {
        console.log(error.message)
    });
};