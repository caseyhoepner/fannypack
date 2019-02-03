export const errorReducer = (state = false, action) => {
  switch(action.type) {

    case 'TOGGLE_ERRORED':
      return action.hasErrored;

  default:
    return state;
  }
}