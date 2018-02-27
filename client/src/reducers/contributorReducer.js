const contributorReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CONTRIBUTORS':
      return action.contributors
    default:
      return state
  }
} 

export default contributorReducer