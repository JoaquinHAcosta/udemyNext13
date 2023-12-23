'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from '..'
import { useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const PokemonFavs = () => {
  const favPokemons = useAppSelector((state) => Object.values(state.pokemons))
  const [pokemons, setPokemons] = useState(favPokemons)

  return (
    <div>
      {/* {
      pokemons.length 
      ? <NoFavorites>
      : <PokemonGrid pokemons={pokemons} /> 
    }*/}
    </div>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}
