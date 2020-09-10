import React, { useState, useEffect } from 'react';
import axios from 'axios'

const MatchPage = () => {
    return (
        <div>
            <h1>Astromatch</h1>
            <button>Lista de matches</button>
            <div>
                <img/>
                <p>Nome:</p>
                <p>Idade:</p>
                <p>Descrição:</p>
            </div>
            <button>X</button>
            <button>✓</button>
        </div>
    )
}

export default MatchPage