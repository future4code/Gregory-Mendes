import React from 'react';
import axios from 'axios';

const baseGetTripsUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gregory-jackson/trips"

const getTrips = () => {
    axios.get(baseGetTripsUrl)
    .then((response) => {
        
    })
    .catch((error) => {

    });
};


export default getTrips;