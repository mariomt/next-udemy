import { ISimplePokemon, PokemonsResponse } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async( limit = 20, offset = 0): Promise<ISimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then( resp => resp.json() );

    const pokemons: ISimplePokemon[] = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(100);


    return (
        <div className="flex flex-col">
            <h1>Hola Page pokemons</h1>
            <div className="flex flex-wrap gap-10 items-cemter justify-center">
                {
                    pokemons.map( pokemon => (<Image
                        key={pokemon.id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        alt={pokemon.name}
                        width={100}
                        height={100}
                    />))
                }
                
            </div>
        </div>
    )
}
