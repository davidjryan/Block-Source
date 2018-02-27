import searchReducer from './searchReducer'
import * as actions from '../actions';

describe('searchReducer tests', () => {

  it('should be defined', () => {
    expect(searchReducer).toBeDefined()
  })

  it('should return a default state', () => {
    const defaultState = {
      value: ''
    };
    expect(searchReducer(undefined, {type: ''})).toEqual(defaultState);
  });

  it('should return a state with a search value', () => {
    const expectedState = {
      value: 'new value'
    }
    const action = actions.searchInputChange('new value')

    expect(searchReducer(undefined, action)).toEqual(expectedState);
  });
})