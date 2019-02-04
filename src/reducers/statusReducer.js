export const statusReducer = (state = false, action) => {
  switch(action.type) {

    case 'TOGGLE_LOADED':
      return action.isLoaded;

  default:
    return state;
  }
}