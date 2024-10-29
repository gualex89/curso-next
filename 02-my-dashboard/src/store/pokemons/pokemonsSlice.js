import { createSlice } from '@reduxjs/toolkit'




const initialState = {
  
  /* '1': {id : 1, name : 'bulbasaur'},
  '2': {id : 2, name : 'ivysaur'},
  '7': {id : 7, name : 'venusaur'}, */
  
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite( state, actions ) {

      const pokemon = actions.payload
      const id = pokemon.id

      if (state [id] ) {
        delete state [id]
        /* return */
      } else {
        state [id] = pokemon
      } 
      
    }
  }  
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer