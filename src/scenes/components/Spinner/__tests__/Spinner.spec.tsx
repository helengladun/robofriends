import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../index';

describe('Spinner component', () => {
  it('render Spinner component correctly', () => {
    expect(shallow(<Spinner />)).toMatchSnapshot();
  });
});
