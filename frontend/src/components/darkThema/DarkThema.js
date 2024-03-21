import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function DarkThema(props) {
  const { children } = props;
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

DarkThema.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DarkThema;
