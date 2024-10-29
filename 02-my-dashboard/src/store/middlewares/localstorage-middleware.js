export const localStorageMiddleware = (state) => {
  return (next) => (action) => {

    next(action);

    if (action.type === 'counter/resetCount') {
      const { pokemons} = state.getState()
      localStorage.setItem('state', JSON.stringify(state))
      return
    }

    
  
  }
}