import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({});
    
    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    const pegaPokemon = pokeName => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            // guarda as infos do pokemon no estado
            setPokemon(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const pokemonInfo = pokemon;

    return (
        <div>
        <p>{pokemonInfo.name}</p>
        <p>{pokemonInfo.weight} Kg</p>
        {pokemonInfo.types && <p>{pokemonInfo.types[0].type.name}</p>}
        {pokemonInfo.sprites && (
            <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
        )}
        </div>
    );
}

export default PokeCard;
