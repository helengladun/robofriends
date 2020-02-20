import React from 'react';
import { shallow, mount } from 'enzyme';
import {useSelector} from 'react-redux';

import Home from './index';

import {IRobot} from '../models/IRobot';

import {RobotsTypes} from '../services/robots/types';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));

const robotsMock = [
  {
    id: 1,
    name: 'user1',
    email: 'user1@gmail.com'
  },
  {
    id: 2,
    name: 'test1',
    email: 'test@gmail.com'
  }
];

describe('App component', () => {

  it('render App component correctly', () => {
    (useSelector as jest.Mock<{robotsList: IRobot[]}>).mockImplementation(() => ({
      robotsList: robotsMock
    }));
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });

  it('do not render list of robots', () => {
    (useSelector as jest.Mock<{robotsList: IRobot[]}>).mockImplementation(() => ({
      robotsList: []
    }));
    const component = shallow(<Home />);
    expect(component.find('Memo(Spinner)').exists()).toBeFalsy();
    expect(component.find('Scroll').exists()).toBeFalsy();
    expect(component.find('ErrorBoundary').exists()).toBeFalsy();
    expect(component.find('Memo(CardList)').exists()).toBeFalsy();
    expect(component.find('div.red').exists()).toBeFalsy();
  });

  it('render list of robots', () => {
    (useSelector as jest.Mock<{robotsList: IRobot[]}>).mockImplementation(() => ({
      robotsList: robotsMock
    }));
    const component = shallow(<Home />);
    expect(component.find('Scroll').exists()).toBeTruthy();
    expect(component.find('ErrorBoundary').exists()).toBeTruthy();
    expect(component.find('Memo(CardList)').exists()).toBeTruthy();
  });

  it('useEffect in App', () => {
    (useSelector as jest.Mock<{robotsList: IRobot[]; searchField: string}>).mockImplementation(() => ({
      robotsList: robotsMock,
      searchField: 'use'
    }));

    const component = mount(<Home />);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: RobotsTypes.REQUEST_ROBOTS
    });

    expect(component.find('Memo(CardList)').prop('robots')).toEqual([{...robotsMock[0]}]);
  });

  it('render error block', () => {
    (useSelector as jest.Mock<{error: string}>).mockImplementation(() => ({
      error: 'error'
    }));

    const component = shallow(<Home />);
    expect(component.find('div.red').exists()).toBeTruthy();
  });
});