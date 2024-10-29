'use client'
import React, { useState } from 'react'
import { PokemonGrid } from '.'
import { useSelector } from 'react-redux'
import { IoHeartOutline } from 'react-icons/io5'




export const FavoritePokemons = () => {

  const favorites = useSelector((state) => state.pokemonReducer) 
  const arrayFavorites =(Object.values(favorites))

  const [pokemons, setPokemons] = useState(arrayFavorites)
  return (
    <>

    {
      pokemons.length ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />
    }
    
    
    </>
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