import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';

describe('Header component', () => {
  it('render Header component correctly', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
