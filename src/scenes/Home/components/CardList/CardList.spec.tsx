import React from 'react';
import { shallow } from 'enzyme';
import CardList from './index';

describe('CardList component', () => {
  const listMock = [
    {
      id: 1,
      name: 'user1',
      email: 'user1@gmail.com'
    },
    {
      id: 2,
      name: 'user2',
      email: 'user2@gmail.com'
    }
  ];

  it('render CardList component correctly', () => {
    expect(shallow(<CardList robots={listMock} />)).toMatchSnapshot();
  });
});