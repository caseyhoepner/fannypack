export const statusReducer = (state = false, action) => {
  switch(action.type) {
    case 'CHANGE_TO_LOADED':
      return action.isLoaded;
  default:
    return state;
  }
}