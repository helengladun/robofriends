import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from './index';

describe('ErrorBoundary component', () => {
  it('render ErrorBoundary component correctly', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot()
  });
});
