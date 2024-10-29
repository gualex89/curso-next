import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemonsSlice'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store = configureStore({
  reducer: {
    counterReducer,
    pokemonReducer
  },
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(localStorageMiddleware) */
})

