import loginReducer from './loginReducer'
import * as actions from '../actions'

describe('loginReducer tests', () => {
  let state;
  beforeEach( () => {
    state = { email: '', password: '', loggedIn: false };
  })

  it('should return the default state', () => {
    const expected = state;
    expect(loginReducer(undefined, actions)).toEqual(expected)
  })

})