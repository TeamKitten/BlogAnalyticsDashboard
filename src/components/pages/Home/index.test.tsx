import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

describe('Home', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('h1').text()).toBe('Home page');
  });
});
