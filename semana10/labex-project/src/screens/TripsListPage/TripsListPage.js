import React from 'react';
import { useHistory } from 'react-router-dom'
import { goToCreateTripPage, goToTripDetailsPage } from '../../routers/switchPages'

const TripsListPage = () => {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            <p>List of Trips</p>
            <button onClick={() => goToTripDetailsPage(history)}>Ver detalhes da viagem</button>
        </div>
    )
}

export default TripsListPage;