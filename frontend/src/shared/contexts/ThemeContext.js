import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import Theme from '../themes';

const ThemeContext = createContext();

export const useAppThemeContext = () => useContext(ThemeContext);

function AppThemeProvider(prop) {
  const { children } = prop;
  const [themeName, setTheName] = useState('light');
  const toggleTheme = useCallback(() => {
    setTheName((old) => (old === 'light' ? 'dark' : 'light'));
  }, []);
  const themeNameProvider = useMemo(
    () => ({ themeName, toggleTheme }),
    [themeName, toggleTheme],
  );
  const theme = useMemo(() => (themeName === 'light'
    ? Theme.LightTheme : Theme.DarkTheme));
  return (
    <ThemeContext.Provider value={ themeNameProvider }>
      <ThemeProvider theme={ theme }>
        <Box width="100vw" height="100vh" bgcolor={ theme.palette.background.default }>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default AppThemeProvider;
