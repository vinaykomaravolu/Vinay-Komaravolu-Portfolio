import React from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './styles.css';
import App from './App.jsx';

const theme = {
  primaryColor: 'orange',
  fontFamily:
    'Manrope, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  headings: {
    fontFamily:
      '"Space Grotesk", Manrope, ui-sans-serif, system-ui, sans-serif',
    fontWeight: '800',
  },
  radius: {
    md: '8px',
    lg: '8px',
    xl: '8px',
  },
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>,
);
