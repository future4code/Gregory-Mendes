import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../../routers/switchPages'
import  useRequestData from '../../hooks/useRequestData'

const baseTripsListUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gregory-jackson/trips"

const TripsListPage = () => {
    const [tripsList, updateTrips] = useRequestData(baseTripsListUrl, []) ;
    const history = useHistory();

    const trips = tripsList.map((trip) => {
        return (
            <div key={trip.id}>
                <p>Nome da viagem:{trip.name}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Descrição:{trip.description}</p>
                <p>Duração:{trip.durationDays}</p>
                <p>Data de partida:{trip.date}</p>
            </div>
        )
    })

    return (
        <div>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            {trips}
            <button onClick={() => goToTripDetailsPage(history)}>Ver detalhes da viagem</button>
        </div>
    )
}

export default TripsListPage;