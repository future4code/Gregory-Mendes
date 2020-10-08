import React, { useEffect, useState }from 'react';
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../../routers/switchPages'
import getTrips from '../../services/requests/getTripsRequest';

const TripsListPage = () => {
    const [tripsList, setTripsList] = useState([]) ;
    const history = useHistory();

    useEffect(() => {
        getTrips(setTripsList);
    }, [tripsList])

    const trips = tripsList.map((trip) => {
        return (
            <div key={trip.id}>
                <p>Nome da viagem: {trip.name}</p>
                <p>Planeta: {trip.planet}</p>
                <p>Descrição: {trip.description}</p>
                <p>Duração: {trip.durationDays}</p>
                <p>Data de partida: {trip.date}</p>
                <button onClick={() => goToTripDetailsPage(history)}>Ver detalhes da viagem</button>
            </div>
        )
    })

    return (
        <div>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            {trips}
        </div>
    )
}

export default TripsListPage;