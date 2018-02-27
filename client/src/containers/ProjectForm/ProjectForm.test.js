import React from 'react';
import { shallow } from 'enzyme';
import ProjectForm from './ProjectForm';

describe('Projects tests', () => {
  let projectForm;

  beforeEach( () => {
    projectForm = shallow(<ProjectForm />)
  })

  it('should match snapshot', () => {
    expect(projectForm).toMatchSnapshot()
  })
})