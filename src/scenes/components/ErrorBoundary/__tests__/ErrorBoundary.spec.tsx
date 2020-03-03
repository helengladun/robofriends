import React from 'react';
import { shallow } from 'enzyme';
import ErrorBoundary from '../index';

describe('ErrorBoundary component', () => {
  it('render ErrorBoundary component correctly', () => {
    const children = <div>Children nodes</div>;
    expect(shallow(<ErrorBoundary>{children}</ErrorBoundary>)).toMatchSnapshot();
  });
});
