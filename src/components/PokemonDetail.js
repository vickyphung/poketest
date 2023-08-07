import React from 'react';
import { useState, useEffect } from 'react'

export default function PokemonDetail(pokemon) {

    // console.log(pokemonUrl)
    // const url = `https://pokeapi.co/api/v2/pokemon/1/`;
    // // const url = { pokemonUrl }
    const [pokemonData, setPokemonData] = useState(null)

    const getPokemon = async () => {
        try {
            const response = await fetch(`${pokemon.pokemon.url}`);
            console.log("HI")
            const data = await response.json();
            //sets data as state
            setPokemonData(data)
        } catch (e) {
            console.error(e)
        }
    }
    useEffect(() => {
        getPokemon();
    }, []);


    return (
        <div>

            {/* {console.log(pokemon.pokemon.url)}
            {console.log(pokemonData)} */}

            <div>
                <h2>Moves:</h2>
                {pokemonData?.moves?.map((move, index) => (
                    <div key={index}>
                        {move.move.name}
                    </div>
                ))}
            </div>



        </div>
    )
}