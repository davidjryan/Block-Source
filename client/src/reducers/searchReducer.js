const searchReducer = (state={value: ''}, action) => {
  switch (action.type) {
  case 'SEARCH_CHANGE':
    return {...state, value: action.searchInput}
  case 'SEARCH_CLEAR':
    return state
  default:
    return state
  }
}

export default searchReducer