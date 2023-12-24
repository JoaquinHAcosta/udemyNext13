'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from '..'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const PokemonFavs = () => {
  const favPokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  )
  // const [pokemons, setPokemons] = useState(Object.values(favPokemons))

  // useEffect(() => {
  // console.log({ favPokemons })
  // setPokemons(favPokemons)
  // }, [favPokemons])

  return (
    <div>
      {favPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favPokemons} />
      )}
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
