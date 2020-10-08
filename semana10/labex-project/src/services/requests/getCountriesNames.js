import axios from 'axios'

const baseCountriesUrl = "https://api.first.org/data/v 1/countries";

const getCountriesNames = (countryOption, setForm) => {
    
    axios.get(baseCountriesUrl)

    .then((response) => {
        console.log(response.data);
        setForm(response.data.country);
    })
    .catch((error) => {
        console.log(error.message);
    });
};

export default getCountriesNames