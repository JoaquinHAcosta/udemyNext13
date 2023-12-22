import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'
import React from 'react'

export const metadata = {
  title: '151 Pokemons',
  description: 'Lista de 151 pokemons',
}

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json())

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))

  //   throw new Error('Esto es un error')

  return pokemons
}

const PokemonPage = async () => {
  const pokemons = await getPokemons(151)

  return (
    <div className="flex flex-col">
      <span className="text-5xl font-bold my-2 text-center">
        Listado de <span className="text-yellow-400 ring-black">Pokemons</span>{' '}
        <small className="text-blue-500 text-1sm">estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonPage
