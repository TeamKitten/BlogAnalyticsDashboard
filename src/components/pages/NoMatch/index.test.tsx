import React from 'react';
import { mount } from 'enzyme';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MemoryRouter } from 'react-router-dom';
import NoMatch from '.';

const theme = createMuiTheme();

describe('NoMatch', () => {
  it('should be rendered', () => {
    const wrapper = mount(
      <MuiThemeProvider theme={theme}>
        <MemoryRouter>
          <NoMatch />
        </MemoryRouter>
      </MuiThemeProvider>
    );
    expect(wrapper.text()).toContain('404 Not Found.');
  });
});
