import contributorReducer from './contributorReducer'
import * as actions from '../actions'

describe('projectsReducer tests', () => {
  let state;
  beforeEach( () => {
    state = []
  })

  it('should return the default state', () => {
    const expected = state;
    expect(contributorReducer(undefined, actions)).toEqual(expected)
  })

  it('should return a new state with contributors', () => {
    const contributors = [{ name: "Christie", bio: "Badass" }, { name: "Jhun", bio: "MVP" }]
    const expected = contributors
    expect(contributorReducer(undefined, actions.setProjectContributors(contributors))).toEqual(expected)
  })

})