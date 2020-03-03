import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../index';

describe('SearchBox component', () => {
  const onChangeHandler = jest.fn();
  const component = shallow(<SearchBox onChangeHandler={onChangeHandler}/>);

  it('render SearchBox component correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('call onChangeHandler', () => {
    const text = 'search value';
    const event = {target: {value: text}};
    component.find('input').simulate('change', event);
    expect(onChangeHandler).toHaveBeenCalledWith(event);
  });
});
