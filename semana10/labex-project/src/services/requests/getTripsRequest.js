import axios from 'axios';

const baseGetTripsUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gregory-jackson/trips"

const getTrips = (setData) => {
    axios.get(baseGetTripsUrl)
    .then((response) => {
        setData(response.data.trips);
    })
    .catch((error) => {
        console.log(error.message);
    });
};


export default getTrips;