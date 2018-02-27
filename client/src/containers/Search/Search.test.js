import React from 'react';
import { shallow } from 'enzyme';
import * as actions from '../../actions'
import { Search, mapStateToProps, mapDispatchToProps } from './Search';

describe('Search tests', () => {
  let mockSearchInput;
  let inputChange;
  let mockProjects;
  let search;

  beforeEach( () => {
    mockSearchInput = 'hoverboard';
    inputChange = jest.fn();
    mockProjects = [{title: 'hoverboard'}, {title: 'flying cars'}]

    search = shallow(<Search 
                        searchInput={mockSearchInput}
                        projects={mockProjects}
                        inputChange={inputChange}
                      />)
  })

  it('should match the snapshot', () => {
    expect(search).toMatchSnapshot()
  })

  describe('mapStateToProps tests', () => {
    it('should pull projects from the store', () => {
      const mockSearchInput = {value: 'hoverboard'}
      const mockStore = {
        projects: mockProjects,
        searchInput: mockSearchInput.value
      };

      actions.searchInputChange('hoverboard')
      const result = mapStateToProps(mockStore);
      console.log(mockStore)
      console.log(result)

      expect(result.projects).toEqual(mockStore.projects[0]);
    });
  });

  describe('mapDispatchToProps tests', () => {
    it('Should call dispatch when inputChange is called', () => {
      const mockDispatch = jest.fn();
      const result = mapDispatchToProps(mockDispatch);

      result.inputChange('hoverboard');
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})