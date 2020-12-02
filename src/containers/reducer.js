const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        persons: state.persons + action.value
      }
    case 'REMOVE_PERSON':
      return {
        ...state,
        persons: state.persons - action.value
      }
    default:
      return state;
  }
}

export default reducer;