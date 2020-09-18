import React from 'react';
import { goToApplicationPage, goToLoginPage } from '../../routers/switchPages';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            <p>Seja bem-vindo a LabeX! Sua companhia de viagens espaciais.</p>
            <p>
                Aqui nós te levamos para o espaço... literalmente!
            </p>
            <button onClick={() => goToApplicationPage(history)}>Candidatar agora!</button>
            <button onClick={() => goToLoginPage(history)}>Fazer login</button>
        </div>
    );
};

export default HomePage;