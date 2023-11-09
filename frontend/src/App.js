import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './shared/routes';
import AppThemeProvider from './shared/contexts/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
