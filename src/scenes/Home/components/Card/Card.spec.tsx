import React from 'react';
import { shallow } from 'enzyme';
import Card from './index';

describe('Card component', () => {
  const data = {
    id: 1,
    name: 'user1',
    email: 'user1@gmail.com'
  };

  it('render Card component correctly', () => {
    expect(shallow(<Card data={data} />)).toMatchSnapshot()
  });
});
