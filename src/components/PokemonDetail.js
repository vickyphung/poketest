import React from 'react';
import { useState, useEffect } from 'react'

export default function PokemonDetail(pokemonUrl) {

    console.log(pokemonUrl)
    const url = `https://pokeapi.co/api/v2/pokemon/1/`;
    // const url = { pokemonUrl }
    const [pokemon, setPokemon] = useState(null)

    const getPokemon = async () => {
        try {
            console.log(pokemonUrl)
        const response = await fetch({pokemonUrl});
        console.log("HI")
            const data = await response.json();
            //sets data as state
            setPokemon(data)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getPokemon();
    }, []);


    return (
        <div>

            {pokemon?.moves?.map((move, index) => (
                <div key={index}>
                        {move.move.name}
                </div>
            ))}
            Details
        </div>
    )
}