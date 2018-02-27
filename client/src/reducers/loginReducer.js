import { auth, isAuthenticated } from '../services/firebase'

const loginReducer = ( state = { email: '', password: '', loggedIn: false }, action) => {
  switch(action.type) {

    default:
      return state;
  }
}

export default loginReducer;