import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

describe('Router', () => {
  it('should be rendered', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Router).length).toBe(1);
  });
});
