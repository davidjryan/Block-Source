import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header tests', () => {
  let header;
  beforeEach( () => {
    header = shallow(<Header/>)
  })
  it('should be defined', () => {
    expect(header).toBeDefined()
  })

})
