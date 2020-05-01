import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders app name', () => {
  const wrapper = shallow(<App />);
  const h1Element = wrapper.find('h1');
  expect(h1Element.text()).toBe('Blog Analytics Dashboard');
});
