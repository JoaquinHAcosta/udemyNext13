import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons'
import React from 'react'

export const metadata = {
  title: 'Favoritos',
  description: 'Lista de favoritos',
}

const PokemonPage = async () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl font-bold my-2 text-center">
        <span className="text-yellow-400 ring-black">Pokemons </span> Favoritos
        <small className="text-blue-500 text-1sm"> Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  )
}

export default PokemonPage
