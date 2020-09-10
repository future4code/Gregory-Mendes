import React, { useState, useEffect } from 'react';
import axios from 'axios'

const MatchesListPage = (props) => {
    return (
        <div>
            <button onClick={props.onClickBackButton}>Voltar</button>
            <h2>Seus matches</h2>
            <ul>
                <li>
                    <img/>
                    <p>Nome:</p>
                </li>
                <li>
                    <img/>
                    <p>Nome:</p>
                </li>
                <li>
                    <img/>
                    <p>Nome:</p>
                </li>
            </ul>
            <button>Limpar</button>
        </div>
    )
}

export default MatchesListPage