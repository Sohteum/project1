import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';

const darkTheme = {
  textColor: "whiteSmoke",
  backgroundColor: "#111"
}
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whiteSmoke"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>

    <App />
    </ThemeProvider>
  </React.StrictMode>
);


