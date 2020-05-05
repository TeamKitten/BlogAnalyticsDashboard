import React from 'react';
import { shallow } from 'enzyme';

import NoMatch from '.';

describe('NoMatch', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<NoMatch />);
    expect(wrapper.find('h1').text()).toBe('404 Not Found.');
  });
});
