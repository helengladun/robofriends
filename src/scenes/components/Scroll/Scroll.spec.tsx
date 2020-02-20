import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './index';

describe('Scroll component', () => {
  const children = <div>Children</div>;
  const component = shallow(<Scroll>{children}</Scroll>);
  it('render Scroll component correctly', () => {
    expect(component).toMatchSnapshot();
    expect(component.find('div.scroll').children().text()).toBe('Children');
  });
});
